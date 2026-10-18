/* PushExcel fx.js: animasi dan kenyamanan ringan (tanpa pustaka).
   Semua fitur bersifat tambahan: bila skrip ini gagal, situs tetap bisa dipakai. */
(function () {
  'use strict';
  var d = document, root = d.documentElement;
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;
  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function raf(f) { return (window.requestAnimationFrame || setTimeout)(f, 16); }

  /* ---------- Header: bayangan saat digulir + tombol ke atas ---------- */
  var top = $('.top'), totop = null, ticking = false;
  function onScroll() {
    ticking = false;
    var y = window.pageYOffset || root.scrollTop;
    if (top) top.classList.toggle('scrolled', y > 4);
    if (totop) totop.classList.toggle('show', y > 700);
  }
  function mkTotop() {
    totop = d.createElement('button');
    totop.type = 'button'; totop.className = 'totop'; totop.setAttribute('aria-label', 'Kembali ke atas');
    totop.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    totop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }); });
    d.body.appendChild(totop);
  }
  mkTotop();
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; raf(onScroll); } }, { passive: true });
  onScroll();

  /* ---------- Tema pada halaman statis (SPA punya pengendali sendiri di app.js) ---------- */
  if (!$('#app')) {
    var tb = $('#themeBtn');
    if (tb) tb.addEventListener('click', function () {
      var cur = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('be_theme', JSON.stringify(next)); } catch (e) { /* abaikan */ }
    });
  }

  /* ---------- Muncul halus saat digulir ---------- */
  var REVEAL = '.path-list li, .catrow, .grp, .latbanner, .lat-card, .related li, .shots figure, .shot, .sheetbox, .quiz, .syntax, .trybox, .list, .dlbox, .tblwrap';
  var io = null;
  if (hasIO && !reduced) {
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.06 });
  }
  function scanReveal(scope) {
    if (!io) return;
    var n = 0, last = null;
    $$(REVEAL, scope || d).forEach(function (el) {
      if (el.classList.contains('rv') || el.closest('.hits')) return;
      if (el.parentNode !== last) { last = el.parentNode; n = 0; }
      el.style.setProperty('--d', Math.min(n++, 6) * 0.045 + 's');
      el.classList.add('rv');
      io.observe(el);
    });
  }

  /* ---------- Angka berhitung naik ---------- */
  var cio = null;
  function countTo(el) {
    var to = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(to)) return;
    if (reduced || to < 2) { el.textContent = to; return; }
    var t0 = null, dur = 900;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * e);
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = '0';
    requestAnimationFrame(step);
  }
  function scanCounts(scope) {
    $$('[data-count]:not([data-cd])', scope || d).forEach(function (el) {
      el.setAttribute('data-cd', '1');
      if (!hasIO) { return; }
      if (!cio) cio = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { countTo(e.target); cio.unobserve(e.target); } });
      }, { threshold: 0.4 });
      cio.observe(el);
    });
  }

  /* ---------- Salin rumus di halaman materi statis ---------- */
  function addCopy() {
    if ($('#app')) return;
    $$('.syntax').forEach(function (box) {
      if ($('.copy', box)) return;
      var pre = $('pre', box); if (!pre) return;
      var b = d.createElement('button');
      b.type = 'button'; b.className = 'copy'; b.textContent = 'Salin'; b.setAttribute('aria-label', 'Salin rumus');
      b.addEventListener('click', function () {
        var t = pre.innerText.trim();
        function ok() { b.textContent = 'Tersalin'; b.classList.add('ok'); setTimeout(function () { b.textContent = 'Salin'; b.classList.remove('ok'); }, 1400); }
        function fb() {
          var ta = d.createElement('textarea'); ta.value = t; ta.style.cssText = 'position:fixed;opacity:0';
          d.body.appendChild(ta); ta.select(); try { d.execCommand('copy'); ok(); } catch (e) { /* abaikan */ } d.body.removeChild(ta);
        }
        if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(t).then(ok, fb); else fb();
      });
      box.insertBefore(b, pre);
    });
  }

  /* ---------- Daftar isi: tandai bagian yang sedang dibaca ---------- */
  function spy() {
    var links = $$('.toc a[href^="#"]');
    if (!links.length || !hasIO) return;
    var map = {};
    links.forEach(function (a) { var h = d.getElementById(a.getAttribute('href').slice(1)); if (h) map[h.id] = a; });
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && map[e.target.id]) {
          links.forEach(function (a) { a.classList.remove('on'); });
          map[e.target.id].classList.add('on');
          var a = map[e.target.id], bar = a.parentNode;
          if (bar.scrollWidth > bar.clientWidth) bar.scrollTo({ left: a.offsetLeft - 60, behavior: reduced ? 'auto' : 'smooth' });
        }
      });
    }, { rootMargin: '-15% 0px -70% 0px' });
    Object.keys(map).forEach(function (id) { so.observe(d.getElementById(id)); });
  }

  /* ---------- Halaman daftar latihan: cari dan saring ---------- */
  function latFilter() {
    var first = $('h2.lvl'); if (!first) return;
    var cards = $$('.lat-card'); if (!cards.length) return;
    var bar = d.createElement('div');
    bar.className = 'latsearch';
    bar.setAttribute('role', 'search');
    bar.innerHTML = '<label class="sr" for="latq">Cari paket latihan</label>' +
      '<input id="latq" type="search" placeholder="Cari paket, misalnya gaji atau stok" autocomplete="off" spellcheck="false">' +
      '<div class="fchips" role="group" aria-label="Tingkat"></div>';
    var chips = $('.fchips', bar), level = 'semua';
    [['semua', 'Semua'], ['pemula', 'Pemula'], ['menengah', 'Menengah'], ['lanjutan', 'Lanjutan']].forEach(function (x) {
      var c = d.createElement('button'); c.type = 'button'; c.className = 'fchip'; c.textContent = x[1]; c.dataset.v = x[0];
      c.setAttribute('aria-pressed', x[0] === 'semua' ? 'true' : 'false'); chips.appendChild(c);
    });
    var cnt = d.createElement('p'); cnt.className = 'latcount'; cnt.setAttribute('aria-live', 'polite');
    var none = d.createElement('p'); none.className = 'latnone'; none.hidden = true; none.textContent = 'Tidak ada paket yang cocok. Coba kata lain atau pilih Semua.';
    first.parentNode.insertBefore(bar, first); first.parentNode.insertBefore(cnt, first); first.parentNode.insertBefore(none, first);
    var data = cards.map(function (c) {
      var b = $('.badge', c), lv = b ? b.className.replace('badge', '').trim() : '';
      return { el: c, lv: lv, txt: c.textContent.toLowerCase(), sec: c.closest('.lat-grid') };
    });
    var heads = $$('h2.lvl');
    function apply() {
      var q = $('#latq').value.trim().toLowerCase(), shown = 0;
      data.forEach(function (x) {
        var ok = (level === 'semua' || x.lv === level) && (!q || x.txt.indexOf(q) > -1);
        x.el.hidden = !ok; if (ok) shown++;
      });
      heads.forEach(function (h) {
        var grid = h.nextElementSibling; while (grid && !grid.classList.contains('lat-grid')) grid = grid.nextElementSibling;
        var any = grid && $$('.lat-card', grid).some(function (c) { return !c.hidden; });
        h.hidden = !any; if (h.nextElementSibling && h.nextElementSibling.classList.contains('lvl-d')) h.nextElementSibling.hidden = !any;
        if (grid) grid.hidden = !any;
      });
      cnt.textContent = (q || level !== 'semua') ? shown + ' paket ditemukan' : data.length + ' paket';
      none.hidden = shown > 0;
    }
    bar.addEventListener('input', apply);
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('.fchip'); if (!b) return;
      level = b.dataset.v;
      $$('.fchip', chips).forEach(function (c) { c.setAttribute('aria-pressed', c === b ? 'true' : 'false'); });
      apply();
    });
    apply();
  }

  /* ---------- Halaman paket latihan: bilah kemajuan membaca soal ---------- */
  function soalRail() {
    var ol = $('ol.soal'); if (!ol || !hasIO) return;
    var items = $$(':scope > li', ol); if (items.length < 2) return;
    var rail = d.createElement('div'); rail.className = 'soalprog'; rail.setAttribute('aria-hidden', 'true');
    rail.innerHTML = '<i></i>';
    ol.parentNode.insertBefore(rail, ol);
    var fill = $('i', rail), seen = 0;
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && !e.target.classList.contains('seen')) {
          e.target.classList.add('seen'); seen++;
          fill.style.transform = 'scaleX(' + (seen / items.length).toFixed(3) + ')';
          so.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -35% 0px', threshold: 0.15 });
    items.forEach(function (li) { so.observe(li); });
  }

  /* ---------- Pemasangan ---------- */
  function init() {
    scanReveal(d); scanCounts(d); addCopy(); spy(); latFilter(); soalRail();
    var app = $('#app');
    if (app && 'MutationObserver' in window) {
      new MutationObserver(function () { scanReveal(app); scanCounts(app); }).observe(app, { childList: true });
    }
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init); else init();
})();
