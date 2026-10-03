/* Storefront entrance. Existing catalogue, studio and bag remain in app.js. */
let disposeStorefront = () => {};
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sfImage = (name, alt, cls = '', eager = false) => `<img class="${cls}" src="assets/${name}" alt="${alt}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
function renderStorefront() {
  const phones = phoneProducts();
  const featured = ['iphone-18-pro-max','galaxy-s26-ultra','pixel-11-pro','nothing-phone-4a-pro'].map(id => products.find(p => p.id === id)).filter(Boolean);
  const floating = [
    ['airpods.png','Audio','Audio','float-a'],
    ['opt-iphone-18-pro-finish-select-burgundy-202609.webp','Phones','Phones','float-b'],
    ['charger.jpg','Charging','Charging','float-c'],
    ['case.jpg','Cases','Cases','float-d']
  ];
  main.innerHTML = `<div class="storefront">
    <section class="entrance" aria-labelledby="entrance-title">
      <div class="entrance-pin">
        <div class="hero-halo" aria-hidden="true"></div><div class="orbital orbital-one" aria-hidden="true"></div><div class="orbital orbital-two" aria-hidden="true"></div>
        <div class="entrance-copy"><p class="overline"><span class="status-dot"></span> THE KNOTWORK COLLECTION</p><h1 id="entrance-title">Good tech.<br><span>Great feeling.</span></h1><p class="intro-description">Your next phone. Your favourite sound.<br>All the little things that make it yours.</p><a class="store-btn" href="#catalog/All">Discover the collection <span>↗</span></a></div>
        <div class="floating-collection">${floating.map(([im,alt,cat,cls],i)=>`<a class="float-product ${cls}" href="#catalog/${cat}" aria-label="Explore ${alt.toLowerCase()}" style="--float-delay:${-i*1.8}s"><div class="float-shell">${sfImage(im,alt,'',true)}</div><span>${alt}<b>↗</b></span></a>`).join('')}</div>
        <div class="entrance-phone" aria-hidden="true">${sfImage('opt-iphone-18-pro-max-finish-select-glacier-202609.webp','','',true)}</div>
        <div class="entrance-foot"><span>CURATED IN BANGLADESH <span class="little-star">✳</span></span><button class="scroll-cue" data-scroll="departments">Scroll to explore <span>↓</span></button><button class="motion-toggle" aria-pressed="false">Pause motion <span>Ⅱ</span></button></div>
      </div>
    </section>
    <section class="departments sf-dark" id="departments" aria-labelledby="department-title"><div class="sf-wrap">
      <div class="sf-heading reveal"><p class="overline">01 / FIND YOUR EVERYDAY</p><h2 id="department-title">A world of possibilities.<br><span>One beautiful place.</span></h2><p>Start with what you love. Build from there.</p></div>
      <div class="department-grid">
        <a class="department department-phone reveal" href="#catalog/Phones"><div class="department-top"><span>01 / PHONES</span><span class="glass-arrow">↗</span></div><h3>Your world.<br>In your hand.</h3><p>Apple · Samsung · Google · Nothing</p><div class="phone-pair">${sfImage('opt-iphone-18-pro-max-finish-select-glacier-202609.webp','Explore phones in the collection')}${sfImage('opt-iphone-18-pro-finish-select-burgundy-202609.webp','Burgundy phone finish')}</div><div class="department-bottom"><span>Explore phones</span><span>${phones.length} models</span></div></a>
        <a class="department department-audio reveal" href="#catalog/Audio"><div class="department-top"><span>02 / SOUND</span><span class="glass-arrow">↗</span></div><h3>A little more<br>in your own world.</h3>${sfImage('airpods.png','Explore earbuds and audio')}<div class="department-bottom"><span>Explore audio</span><span>♪</span></div></a>
        <a class="department department-power reveal" href="#catalog/Charging"><div class="department-top"><span>03 / CHARGING</span><span class="glass-arrow">↗</span></div><h3>Keep going.</h3>${sfImage('charger.jpg','Explore USB-C chargers')}<div class="department-bottom"><span>Find your power</span><span>↗</span></div></a>
        <a class="department department-cases reveal" href="#catalog/Cases"><div class="department-top"><span>04 / CASES & ACCESSORIES</span><span class="glass-arrow">↗</span></div><h3>The finishing touch.</h3>${sfImage('case.jpg','Explore protective cases')}<div class="department-bottom"><span>Make it personal</span><span>↗</span></div></a>
        <a class="department department-all reveal" href="#catalog/All"><span class="overline">ALL TOGETHER, BEAUTIFULLY.</span><h3>Find your kind of tech.</h3><span class="glass-arrow">↗</span><div class="mini-brands"><span>Apple</span><span>Samsung</span><span>Google</span><span>Nothing</span></div></a>
      </div>
    </div></section>
    <section class="ecosystem" aria-labelledby="ecosystem-title"><div class="ecosystem-ring ring-a" aria-hidden="true"></div><div class="ecosystem-ring ring-b" aria-hidden="true"></div>
      <div class="ecosystem-copy reveal"><p class="overline">02 / YOUR EVERYDAY, CONNECTED</p><h2 id="ecosystem-title">Better.<br><em>Together.</em></h2><p>A phone you love. Sound you get lost in.<br>The essentials that bring it all together.</p><a class="store-btn" href="#catalog/All">Build your everyday <span>↗</span></a></div>
      <a class="orbit-item orbit-phone" href="#catalog/Phones">${sfImage('opt-iphone-18-pro-finish-select-silver-202609.webp','Explore phones')}<span>Stay connected ↗</span></a>
      <a class="orbit-item orbit-audio" href="#catalog/Audio">${sfImage('airpods.png','Explore audio')}<span>Find your sound ↗</span></a>
      <a class="orbit-item orbit-charge" href="#catalog/Charging">${sfImage('charger.jpg','Explore charging')}<span>Power your day ↗</span></a>
      <a class="orbit-item orbit-case" href="#catalog/Cases">${sfImage('case.jpg','Explore cases')}<span>Make it yours ↗</span></a>
    </section>
    <section class="featured sf-wrap" id="featured" aria-labelledby="featured-title"><div class="sf-heading heading-row reveal"><div><p class="overline">03 / THE CONSIDERED COLLECTION</p><h2 id="featured-title">Meet your next favourite.</h2><p>A few standouts. Many ways to make them yours.</p></div><a class="under-link" href="#catalog/Phones">All phones <span>↗</span></a></div><div class="featured-grid">${featured.map((p,i)=>`<div class="reveal" style="--reveal-delay:${i*65}ms">${card(p)}</div>`).join('')}</div><p class="price-caption">Sample collection · Illustrative prices in BDT</p></section>
    <section class="colour-invite sf-dark" aria-labelledby="colour-title"><div class="sf-wrap colour-layout"><div class="colour-text reveal"><p class="overline">04 / THE COLOUR STUDIO</p><h2 id="colour-title">Same phone.<br><em>A whole new mood.</em></h2><p>Meet a finish that feels like you. Choose a phone, explore its colours, and make it yours in our interactive studio.</p><a class="store-btn pale" href="#catalog/Phones">Choose your phone <span>↗</span></a><div class="finish-dots" aria-hidden="true"><i></i><i></i><i></i><i></i><span>Find your colour.</span></div></div><div class="colour-art reveal"><div class="colour-orb" aria-hidden="true"></div><span class="colour-label label-top">A LITTLE MORE YOU.</span><a href="#product/iphone-18-pro-max" aria-label="Open iPhone 18 Pro Max in the Colour Studio">${sfImage('opt-iphone-18-pro-max-finish-select-glacier-202609.webp','iPhone 18 Pro Max in Glacier')}</a><span class="floating-label label-left">01 &nbsp; Choose your finish</span><span class="floating-label label-right">02 &nbsp; Set the mood <b>✧</b></span><span class="colour-label label-bottom">YOUR PHONE. YOUR FINISH.</span></div></div></section>
    <section class="editorial" id="everyday" aria-label="Everyday essentials"><div class="editorial-pin"><div class="story-top"><span class="overline">05 / THE EVERYDAY EDIT</span><span class="story-count" aria-hidden="true">01 — 03</span></div><div class="story-panels">
      <article class="story-panel story-active"><div class="story-copy"><span class="overline">SOUND / YOUR OWN LITTLE WORLD</span><h2>Less noise.<br><em>More you.</em></h2><p>Morning playlists. Late-night podcasts.<br>A little quiet in a busy world.</p><a class="under-link" href="#catalog/Audio">Explore audio <span>↗</span></a></div><a class="story-image story-audio" href="#product/airpods-pro" aria-label="View AirPods Pro 2"><span class="sound-rings" aria-hidden="true"></span>${sfImage('airpods.png','AirPods Pro 2')}<span class="story-image-caption">AirPods Pro 2 <b>↗</b></span></a></article>
      <article class="story-panel" inert><a class="story-image story-charge" href="#catalog/Charging" aria-label="Explore charging">${sfImage('charger.jpg','20W USB-C power adapter')}<span class="story-image-caption">Power for the everyday <b>↗</b></span></a><div class="story-copy"><span class="overline">POWER / READY WHEN YOU ARE</span><h2>Small essential.<br><em>Big difference.</em></h2><p>For your desk, your bag, and the days<br>that don't slow down.</p><a class="under-link" href="#catalog/Charging">Explore charging <span>↗</span></a></div></article>
      <article class="story-panel" inert><div class="story-copy"><span class="overline">DETAILS / FINISH THE LOOK</span><h2>A little protection.<br><em>A lot of personality.</em></h2><p>Thoughtful details for the thing<br>you take everywhere.</p><a class="under-link" href="#catalog/Cases">Explore cases <span>↗</span></a></div><a class="story-image story-case" href="#catalog/Cases" aria-label="Explore cases">${sfImage('case.jpg','Clear Case with MagSafe')}<span class="story-image-caption">The finishing touch <b>↗</b></span></a></article>
    </div><div class="story-progress" aria-label="Everyday edit sections"><button class="active" data-story="0" aria-label="Show audio section" aria-pressed="true"></button><button data-story="1" aria-label="Show charging section" aria-pressed="false"></button><button data-story="2" aria-label="Show cases section" aria-pressed="false"></button></div></div></section>
    <section class="shopping-notes sf-wrap"><div class="sf-heading reveal"><p class="overline">06 / A FEW GOOD THINGS TO KNOW</p><h2>Every detail, considered.</h2></div><div class="notes-grid"><div class="shopping-steps reveal"><div><span>01</span><h3>Find your favourite.</h3><p>Explore by category, brand, or search.</p></div><div><span>02</span><h3>Make it yours.</h3><p>Choose a phone's finish and storage in the Colour Studio.</p></div><div><span>03</span><h3>Bring it all together.</h3><p>Keep your chosen configurations in your bag.</p></div></div><div class="sf-faq reveal"><details><summary>How do I explore phone colours?<span>+</span></summary><p>Open Phones, select a model, and the Colour Studio opens with its available colour and storage options. Your selections stay with that item when you add it to your bag.</p></details><details><summary>Where can I find accessories?<span>+</span></summary><p>Explore Sound, Charging, or Cases above. You can also browse the full collection and filter by category.</p></details><details><summary>Can I place a real order?<span>+</span></summary><p>This is a store preview. Prices are illustrative, and checkout is a demo: no payment is taken and no order is sent.</p></details></div></div></section>
    <section class="store-outro sf-dark"><div class="outro-ribbon" aria-hidden="true"></div><div class="sf-wrap outro-grid"><div class="outro-main reveal"><p class="overline">YOUR NEXT EVERYDAY STARTS HERE.</p><h2>Find something<br><em>that feels like you.</em></h2><a class="store-btn pale" href="#catalog/All">Explore the collection <span>↗</span></a></div><div class="outro-links reveal"><p class="overline">THE COLLECTION</p><a href="#catalog/Phones">Phones <span>↗</span></a><a href="#catalog/Audio">Sound <span>↗</span></a><a href="#catalog/Charging">Charging <span>↗</span></a><a href="#catalog/Cases">Cases & accessories <span>↗</span></a></div><div class="outro-location reveal"><span class="outro-star">✳</span><h3>Good tech.<br>Closer to home.</h3><p>Dhaka, Bangladesh<br>BD / ৳</p><button data-scroll="top" class="under-link">Back to top ↑</button></div></div></section>
  </div>`;
  initStorefrontMotion();
}
function initStorefrontMotion() {
  const root = main.querySelector('.storefront');
  let paused = reduceMotion(), pending = false, frame = 0;
  const entrance = root.querySelector('.entrance');
  const editorial = root.querySelector('.editorial');
  const panels = [...root.querySelectorAll('.story-panel')];
  const dots = [...root.querySelectorAll('[data-story]')];
  const toggle = root.querySelector('.motion-toggle');
  const mq = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width: 760px)');
  const applyPause = () => {root.classList.toggle('motion-paused',paused);toggle.setAttribute('aria-pressed',String(paused));toggle.innerHTML=paused?'Play motion <span>▶</span>':'Pause motion <span>Ⅱ</span>';schedule();};
  toggle.onclick = () => {paused=!paused;applyPause()};
  const revealObserver = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');revealObserver.unobserve(e.target)}}),{threshold:.09});
  root.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
  function update() {
    pending=false;
    const h=innerHeight, rect=entrance.getBoundingClientRect();
    const p=Math.max(0,Math.min(1,-rect.top/Math.max(1,entrance.offsetHeight-h)));
    root.style.setProperty('--hero-progress',paused||mobile.matches||mq.matches?0:p);
    if(!mobile.matches && !mq.matches){
      const r=editorial.getBoundingClientRect();
      const ep=Math.max(0,Math.min(.999,-r.top/Math.max(1,editorial.offsetHeight-h)));
      const step=Math.min(2,Math.floor(ep*3));
      panels.forEach((el,i)=>{el.classList.toggle('story-active',i===step);el.inert=i!==step});
      dots.forEach((el,i)=>{el.classList.toggle('active',i===step);el.setAttribute('aria-pressed',String(i===step))});
      root.querySelector('.story-count').textContent=`0${step+1} — 03`;
    }else panels.forEach(el=>{el.inert=false});
    document.body.classList.toggle('header-scrolled',scrollY>30);
  }
  function schedule(){if(!pending){pending=true;frame=requestAnimationFrame(update)}}
  root.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>{if(b.dataset.scroll==='top')window.scrollTo({top:0,behavior:mq.matches?'instant':'smooth'});else document.getElementById(b.dataset.scroll)?.scrollIntoView({behavior:mq.matches?'instant':'smooth'})});
  dots.forEach((b,i)=>b.onclick=()=>{const start=editorial.getBoundingClientRect().top+scrollY;window.scrollTo({top:start+(editorial.offsetHeight-innerHeight)*(i/3+.08),behavior:mq.matches?'instant':'smooth'})});
  const onPreference=()=>{paused=mq.matches;applyPause()};
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);mq.addEventListener('change',onPreference);
  applyPause();update();
  disposeStorefront=()=>{revealObserver.disconnect();cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule);mq.removeEventListener('change',onPreference);document.body.classList.remove('header-scrolled');};
}
