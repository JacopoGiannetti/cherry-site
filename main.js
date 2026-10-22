(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  /* ---------- scroll morbido ---------- */
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
      const target = a.getAttribute('href');
      if (target.length < 2 && target !== '#') return;
      e.preventDefault();
      lenis.scrollTo(target === '#top' || target === '#' ? 0 : target, { offset: -90 });
    }));
  }

  /* ---------- parole che salgono ---------- */
  $$('[data-split]').forEach((el) => {
    let i = 0;
    const wrap = (text, parent) => {
      text.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { parent.appendChild(document.createTextNode(' ')); return; }
        const w = document.createElement('span');
        w.className = 'w';
        const inner = document.createElement('span');
        inner.textContent = part;
        inner.style.setProperty('--i', i++);
        w.appendChild(inner);
        parent.appendChild(w);
      });
    };
    const nodes = [...el.childNodes];
    el.textContent = '';
    nodes.forEach((n) => {
      if (n.nodeType === 3) wrap(n.textContent.trim() ? n.textContent : ' ', el);
      else if (n.nodeType === 1) {
        const clone = n.cloneNode(false);
        wrap(n.textContent, clone);
        el.appendChild(clone);
      }
    });
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  });

  /* ---------- entrate allo scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
  $$('.reveal, [data-split], .reveal-card, .scene').forEach((el) => io.observe(el));
  // L'hero entra subito, senza aspettare lo scroll.
  requestAnimationFrame(() => $$('.hero [data-split], .hero .reveal').forEach((el) => el.classList.add('is-in')));

  /* ---------- nav ---------- */
  const nav = $('[data-nav]');
  const onNav = (y) => nav.classList.toggle('is-compact', y > 60);

  /* ---------- pixel dell'hero ---------- */
  const pixels = $('[data-pixels]');
  const buildPixels = () => {
    pixels.textContent = '';
    const hero = pixels.parentElement;
    const narrow = innerWidth < 720;
    const cell = narrow ? 34 : clamp(Math.round(innerWidth / 15), 56, 104);
    const side = narrow ? 1 : 2;
    const cols = Math.ceil(hero.offsetWidth / cell);
    const rows = Math.ceil((hero.offsetHeight * 0.62) / cell);
    const cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Solo ai lati: il centro resta al titolo.
        const edge = c < side || c >= cols - side;
        if (!edge) continue;
        const i = document.createElement('i');
        i.style.cssText = `left:${c * cell}px;top:${r * cell + 60}px;width:${cell}px;height:${cell}px`;
        pixels.appendChild(i);
        cells.push(i);
      }
    }
    cells.forEach((c) => { if (Math.random() < 0.3) c.classList.add('on'); });
    return cells;
  };
  let pixelCells = buildPixels();
  if (!reduce) {
    setInterval(() => {
      for (let k = 0; k < 3; k++) {
        const c = pixelCells[(Math.random() * pixelCells.length) | 0];
        if (c) c.classList.toggle('on');
      }
    }, 520);
  }
  let resizeT;
  addEventListener('resize', () => { clearTimeout(resizeT); resizeT = setTimeout(() => { pixelCells = buildPixels(); }, 200); });

  /* ---------- mazzo dell'hero ---------- */
  const DISHES = [
    { img: 'rigatoni', title: 'Rigatoni with sausage ragù', min: 30, price: 9.4 },
    { img: 'ramen', title: 'Miso ramen', min: 25, price: 8.2 },
    { img: 'briam', title: 'Greek roasted vegetables', min: 45, price: 6.1 },
    { img: 'risotto', title: 'Mushroom risotto', min: 35, price: 7.3 },
    { img: 'gyros', title: 'Gyros wrap with tzatziki', min: 20, price: 7.8 },
    { img: 'butternut_mac', title: 'Butternut mac and cheese', min: 30, price: 6.6 },
    { img: 'eggplant', title: 'Glazed eggplant rice bowl', min: 25, price: 5.9 },
    { img: 'orzo', title: 'Greek orzo salad', min: 15, price: 6.4 },
    { img: 'jackfruit', title: 'Pulled jackfruit sliders', min: 30, price: 7.1 },
    { img: 'fried_rice', title: 'Vegetable fried rice', min: 15, price: 4.8 },
    { img: 'ribollita', title: 'Tuscan bean and bread soup', min: 40, price: 5.2 },
    { img: 'lasagna', title: 'Classic lasagna', min: 60, price: 10.5 },
  ];
  const BUDGET = 60;
  const deck = $('[data-deck]');
  if (deck) {
    const holder = $('[data-deck-cards]', deck);
    const keptEl = $('[data-deck-kept]', deck);
    const spentEl = $('[data-deck-spent]', deck);
    const meter = $('[data-deck-meter]', deck);
    let next = 0, kept = 0, spent = 0, beat = 0, timer = null, visible = true;
    const pattern = [1, 1, 0, 1, 0, 1, 1, 0];

    const makeCard = () => {
      const d = DISHES[next++ % DISHES.length];
      const el = document.createElement('article');
      el.className = 'dcard';
      el.dataset.price = d.price;
      el.innerHTML = `<img src="assets/dishes/${d.img}.jpg" alt="" draggable="false">
        <span class="dcard__stamp dcard__stamp--yes">KEEP</span><span class="dcard__stamp dcard__stamp--no">PASS</span>
        <div class="dcard__body"><div class="dcard__title">${d.title}</div>
        <div class="dcard__meta"><span>⏱ ${d.min} min</span><span><b>$${d.price.toFixed(2)}</b></span></div></div>`;
      return el;
    };
    const layout = () => {
      const cards = $$('.dcard:not(.go-left):not(.go-right)', holder);
      cards.forEach((c, i) => {
        c.style.zIndex = 10 - i;
        c.style.transform = `translateY(${i * 12}px) scale(${1 - i * 0.05})`;
        c.style.opacity = i > 2 ? 0 : 1;
      });
    };
    for (let k = 0; k < 4; k++) holder.appendChild(makeCard());
    layout();

    const render = () => {
      keptEl.textContent = kept;
      spentEl.textContent = '$' + Math.round(spent);
      meter.style.width = clamp((spent / BUDGET) * 100, 0, 100) + '%';
    };
    const swipe = () => {
      const top = $('.dcard:not(.go-left):not(.go-right)', holder);
      if (!top) return;
      const keep = pattern[beat++ % pattern.length];
      const price = +top.dataset.price;
      if (keep && spent + price > BUDGET) {
        // Budget pieno: una pausa sul traguardo, poi si ricomincia.
        kept = 0; spent = 0; render();
      }
      top.classList.add(keep ? 'go-right' : 'go-left');
      if (keep) { kept++; spent += price; }
      render();
      holder.appendChild(makeCard());
      layout();
      setTimeout(() => top.remove(), 800);
    };
    const start = () => { if (!timer && !reduce) timer = setInterval(() => visible && swipe(), 2100); };
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(deck);
    setTimeout(start, 1300);
  }

  /* ---------- nastri delle cucine ---------- */
  const DISH_CHIPS = [
    ['rigatoni', 'Rigatoni with ragù', 'Italian'], ['ramen', 'Miso ramen', 'Japanese'], ['briam', 'Briam', 'Greek'],
    ['fried_rice', 'Fried rice', 'Chinese'], ['risotto', 'Mushroom risotto', 'Italian'], ['gyros', 'Gyros wrap', 'Greek'],
    ['butternut_mac', 'Butternut mac', 'Comfort'], ['orzo', 'Orzo salad', 'Fresh & light'], ['eggplant', 'Eggplant rice bowl', 'Japanese'],
    ['ribollita', 'Ribollita', 'Italian'], ['jackfruit', 'Jackfruit sliders', 'Comfort'], ['lasagna', 'Lasagna', 'Italian'],
  ];
  const CUISINES = [
    ['🇮🇹', 'Italian'], ['🇮🇳', 'Indian'], ['🇯🇵', 'Japanese'], ['🇬🇷', 'Greek'], ['🇨🇳', 'Chinese'], ['🇰🇷', 'Korean'],
    ['🇲🇽', 'Mexican'], ['🧆', 'Middle Eastern'], ['🇹🇭', 'Thai'], ['🍲', 'Comfort food'], ['🥗', 'Fresh & light'],
  ];
  const marquees = $$('[data-marquee]').map((m, idx) => {
    const track = $('[data-marquee-track]', m);
    const html = idx === 0
      ? DISH_CHIPS.map(([img, name, c]) => `<span class="chip"><img src="assets/dishes/${img}.jpg" alt="" loading="lazy"><span>${name}<small>${c}</small></span></span>`).join('')
      : CUISINES.map(([e, n]) => `<span class="chip chip--text"><span class="chip__emoji">${e}</span>${n}</span>`).join('');
    track.innerHTML = html + html + html;
    return { el: m, track, dir: m.dataset.marquee === 'left' ? -1 : 1, x: 0, w: 0, hover: false };
  });
  marquees.forEach((m) => {
    m.el.addEventListener('mouseenter', () => { m.hover = true; });
    m.el.addEventListener('mouseleave', () => { m.hover = false; });
  });
  const measure = () => marquees.forEach((m) => { m.w = m.track.scrollWidth / 3; if (m.dir > 0) m.x = -m.w; });
  addEventListener('load', measure);
  measure();

  /* ---------- schermi delle funzioni ---------- */
  const SCREENS = [
    // 01 lista della spesa
    () => `
      <div class="screen__title" data-step>Grocery list</div>
      <div class="screen__sub" data-step>4 recipes · 2 people</div>
      <div class="aisle" data-step>Produce</div>
      <div class="item" data-step><span class="item__box"></span><span class="item__name">Cherry tomatoes<span class="item__q">400 g</span></span><span class="item__price">$3.20</span></div>
      <div class="item" data-step data-swap><span class="item__box"></span><span class="item__name" data-swap-name>Baby spinach<span class="item__q">200 g</span></span><span class="item__price">$2.40</span></div>
      <div class="item" data-step><span class="item__box"></span><span class="item__name">Garlic<span class="item__q">1 head</span></span><span class="item__price">$0.60</span></div>
      <div class="aisle" data-step>Pantry</div>
      <div class="item" data-step><span class="item__box"></span><span class="item__name">Rigatoni<span class="item__q">500 g</span></span><span class="item__price">$1.90</span></div>
      <div class="item" data-step><span class="item__box"></span><span class="item__name">Arborio rice<span class="item__q">300 g</span></span><span class="item__price">$2.70</span></div>
      <div class="aisle" data-step>Fridge</div>
      <div class="item" data-step><span class="item__box"></span><span class="item__name">Parmesan<span class="item__q">100 g</span></span><span class="item__price">$3.80</span></div>
      <div class="total" data-step><span>Estimated total</span><b data-total>$0.00</b></div>`,
    // 02 ricetta dai social
    () => `
      <div class="reel" data-step><img src="assets/dishes/butternut_mac.jpg" alt=""><span class="reel__badge">▶ @weeknightcooks</span><span class="reel__share">Shared to Cherry</span></div>
      <div class="screen__title" data-step>Mac and cheese</div>
      <div class="screen__sub" data-step>Adapted to you: dairy-free</div>
      <div class="swap" data-step><span class="swap__from">Butter</span><span class="swap__arrow">→</span><span class="swap__to">Olive oil</span><span class="swap__why">Dairy-free, same richness</span></div>
      <div class="swap" data-step><span class="swap__from">Cheddar</span><span class="swap__arrow">→</span><span class="swap__to" data-cycle="Cashew cheese|Nutritional yeast|Vegan cheddar">Cashew cheese</span><span class="swap__why">Tap to see alternatives</span></div>
      <div class="swap" data-step><span class="swap__from">Whole milk</span><span class="swap__arrow">→</span><span class="swap__to">Oat milk</span><span class="swap__why">Creamy, neutral taste</span></div>
      <div class="swap same" data-step><span class="swap__to">Macaroni, butternut squash</span><span class="ok">✓ already fine</span></div>
      <div class="saved" data-step>Save to cookbook</div>`,
    // 03 menu
    () => `
      <div class="menu-paper" data-step>
        <h4>TRATTORIA</h4>
        <div class="menu-line" data-hit="ok"><span>Pasta al pomodoro</span><span>€11</span></div>
        <div class="menu-line"><span>Vitello tonnato</span><span>€16</span></div>
        <div class="menu-line" data-hit="tweak"><span>Risotto ai funghi</span><span>€14</span></div>
        <div class="menu-line"><span>Tagliata di manzo</span><span>€22</span></div>
        <div class="menu-line" data-hit="ok"><span>Insalata di farro</span><span>€12</span></div>
        <div class="menu-line"><span>Fritto misto</span><span>€18</span></div>
        <div class="beam"></div>
      </div>
      <div class="verdict verdict--ok" data-step><h5>Order as is</h5><p><span>Pasta al pomodoro</span><span>€11</span></p><p><span>Insalata di farro</span><span>€12</span></p></div>
      <div class="verdict verdict--tweak" data-step><h5>Ask for a tweak</h5><p><span>Risotto ai funghi</span><span>€14</span></p>
        <div class="say"><b>SAY THIS</b>“Could I have the risotto without butter and parmesan?”</div></div>`,
    // 04 barcode
    () => `
      <div class="screen__title" data-step>Scan a product</div>
      <div class="viewfinder" data-step>
        <div class="pack"><span>CRISPY<br>CRACKERS</span><span class="barcode"></span></div>
        <span class="corner corner--tl"></span><span class="corner corner--tr"></span><span class="corner corner--bl"></span><span class="corner corner--br"></span>
        <span class="laser"></span>
      </div>
      <div class="answer" data-step data-late>
        <div class="answer__head"><span class="answer__icon">✕</span>Doesn’t fit your diet</div>
        <p>Wheat flour, sunflower oil, salt, <mark>whey powder</mark>, yeast, rosemary.</p>
        <p><b>Whey powder</b> comes from milk, and your profile is dairy-free.</p>
      </div>`,
    // 05 insieme
    () => `
      <div class="island" data-step><span class="island__ring" data-ring></span><span data-island>0 of 6 items</span><span>$24</span></div>
      <div class="screen__title" data-step>Shared list</div>
      <div class="people" data-step><span class="avatar avatar--a">J</span><span class="avatar avatar--b">G</span><span>You and Giulia, live</span></div>
      <div class="item" data-step data-tick="a"><span class="item__box"></span><span class="item__name">Cherry tomatoes</span><span class="item__who item__who--a">You</span></div>
      <div class="item" data-step data-tick="b"><span class="item__box"></span><span class="item__name">Chickpeas</span><span class="item__who item__who--b">Giulia</span></div>
      <div class="item" data-step data-tick="a"><span class="item__box"></span><span class="item__name">Basil</span><span class="item__who item__who--a">You</span></div>
      <div class="item" data-step data-tick="b"><span class="item__box"></span><span class="item__name">Oat milk</span><span class="item__who item__who--b">Giulia</span></div>
      <div class="item" data-step data-tick="b"><span class="item__box"></span><span class="item__name">Lemons</span><span class="item__who item__who--b">Giulia</span></div>
      <div class="item" data-step data-tick="a"><span class="item__box"></span><span class="item__name">Sourdough</span><span class="item__who item__who--a">You</span></div>
      <div class="toast" data-step><span>🔔</span><span data-toast>Giulia is at the store</span></div>`,
  ];

  // Ogni schermo ha la sua piccola storia, che riparte ogni volta che torna attivo.
  const STORIES = [
    (s, later) => {
      const total = $('[data-total]', s);
      later(1900, () => countMoney(total, 14.6, 900));
      later(3400, () => {
        const row = $('[data-swap]', s);
        row.classList.add('swapped');
        $('[data-swap-name]', row).innerHTML = 'Kale<span class="item__q">200 g</span><span class="item__swap">SWAPPED</span>';
      });
    },
    (s, later) => {
      const el = $('[data-cycle]', s);
      const opts = el.dataset.cycle.split('|');
      let k = 0;
      const loop = () => { k = (k + 1) % opts.length; el.textContent = opts[k]; el.classList.remove('flip'); void el.offsetWidth; el.classList.add('flip'); later(1500, loop); };
      later(2600, loop);
    },
    (s, later) => {
      later(1600, () => $$('[data-hit]', s).forEach((l) => l.classList.add('hit-' + l.dataset.hit)));
    },
    () => {},
    (s, later) => {
      const items = $$('[data-tick]', s);
      const ring = $('[data-ring]', s);
      const label = $('[data-island]', s);
      const toast = $('[data-toast]', s);
      let n = 0;
      const tick = () => {
        if (n >= items.length) return;
        const it = items[n++];
        it.classList.add('ticked');
        ring.style.setProperty('--p', Math.round((n / items.length) * 100));
        label.textContent = `${n} of ${items.length} items`;
        toast.textContent = it.dataset.tick === 'b' ? `Giulia ticked ${$('.item__name', it).textContent}` : `You ticked ${$('.item__name', it).textContent}`;
        later(1100, tick);
      };
      later(2200, tick);
    },
  ];

  const countMoney = (el, to, ms) => {
    const t0 = performance.now();
    const step = (t) => {
      const p = clamp((t - t0) / ms, 0, 1);
      el.textContent = '$' + (to * easeOut(p)).toFixed(2);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const makeScreen = (i) => {
    const s = document.createElement('div');
    s.className = 'screen';
    s.innerHTML = SCREENS[i]();
    return s;
  };

  // Un controller per telefono: tiene i timer di uno schermo alla volta.
  const player = (screens) => {
    let timers = [];
    let current = -1;
    const clear = () => { timers.forEach(clearTimeout); timers = []; };
    return (i) => {
      if (i === current) return;
      current = i;
      clear();
      screens.forEach((s, k) => {
        s.classList.toggle('is-active', k === i);
        if (k !== i) {
          // Lo schermo che esce torna allo stato iniziale, pronto a ripartire.
          const fresh = makeScreen(k);
          s.innerHTML = fresh.innerHTML;
        }
      });
      const s = screens[i];
      if (!s) return;
      const later = (ms, fn) => timers.push(setTimeout(fn, ms));
      const steps = $$('[data-step]', s);
      if (reduce) { steps.forEach((el) => el.classList.add('on')); return; }
      steps.forEach((el, k) => {
        const delay = el.hasAttribute('data-late') ? 1900 : 120 + k * 110;
        later(delay, () => el.classList.add('on'));
      });
      STORIES[i](s, later);
    };
  };

  const screenHost = $('[data-screens]');
  const mainScreens = SCREENS.map((_, i) => makeScreen(i));
  mainScreens.forEach((s) => screenHost.appendChild(s));
  const showMain = player(mainScreens);
  const features = $$('[data-feature]');

  // Su mobile ogni funzione ha il suo telefono, sotto il testo.
  $$('[data-inline]').forEach((host) => {
    const i = +host.dataset.inline;
    host.innerHTML = '<div class="phone"><div class="phone__notch"></div><div class="phone__screen"></div></div>';
    const scr = makeScreen(i);
    $('.phone__screen', host).appendChild(scr);
    const show = player([scr]);
    new IntersectionObserver(([e]) => { if (e.isIntersecting) show(0); else show(-1); }, { threshold: 0.5 }).observe(host);
  });

  const desktop = matchMedia('(min-width: 1021px)');
  const pickFeature = () => {
    if (!desktop.matches) return;
    const mid = innerHeight / 2;
    let best = 0, dist = Infinity;
    features.forEach((f, i) => {
      const r = f.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - mid);
      if (d < dist) { dist = d; best = i; }
    });
    features.forEach((f, i) => f.classList.toggle('is-active', i === best));
    showMain(best);
  };

  /* ---------- linea dei passi ---------- */
  const stepsEl = $('[data-steps]');
  const line = $('[data-steps-line]');
  const stepItems = $$('.step', stepsEl);
  const drawSteps = () => {
    const r = stepsEl.getBoundingClientRect();
    const p = clamp((innerHeight * 0.8 - r.top) / (r.height + innerHeight * 0.25), 0, 1);
    const vertical = !desktop.matches;
    line.style.transform = vertical ? `scaleY(${p})` : `scaleX(${p})`;
    stepItems.forEach((s, i) => s.classList.toggle('is-lit', p >= i / (stepItems.length - 1) - 0.02 && p > 0));
  };

  /* ---------- contatori ---------- */
  const countIO = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    countIO.unobserve(e.target);
    const to = +e.target.dataset.count;
    if (reduce) { e.target.textContent = to; return; }
    const t0 = performance.now();
    const step = (t) => {
      const p = clamp((t - t0) / 1400, 0, 1);
      e.target.textContent = Math.round(to * easeOut(p));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    setTimeout(() => { e.target.textContent = to; }, 1500);
  }), { threshold: 0.6 });
  $$('[data-count]').forEach((el) => countIO.observe(el));

  /* ---------- FAQ ---------- */
  $$('[data-faq] .qa').forEach((qa) => {
    const btn = $('button', qa);
    btn.addEventListener('click', () => {
      const open = !qa.classList.contains('is-open');
      qa.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open);
    });
  });

  /* ---------- un solo ciclo per tutto ciò che segue lo scroll ---------- */
  const update = () => {
    onNav(lenis ? lenis.scroll : scrollY);
    pickFeature();
    drawSteps();
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  if (lenis) lenis.on('scroll', update);
  update();

  let lastY = scrollY, velocity = 0;
  const frame = () => {
    const y = lenis ? lenis.scroll : scrollY;
    velocity = velocity * 0.9 + (y - lastY) * 0.1;
    lastY = y;
    if (!reduce) {
      // I nastri accelerano un po' quando si scorre la pagina.
      const boost = 1 + Math.min(6, Math.abs(velocity) * 0.35);
      marquees.forEach((m) => {
        if (!m.w) return;
        const speed = (m.hover ? 0.15 : 0.55) * boost;
        m.x += m.dir * speed;
        if (m.x <= -m.w) m.x += m.w;
        if (m.x >= 0) m.x -= m.w;
        m.track.style.transform = `translate3d(${m.x}px,0,0)`;
      });
    }
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
})();
