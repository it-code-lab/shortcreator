
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    templateType: params.get('templateType') || "Fact",
    title: params.get('title') || "Default Title",
    mainText: params.get('mainText') || "Default Main Text",
    subText: params.get('subText') || "Default Sub Text",
    ctaText: params.get('ctaText') || "\uD83D\uDC49 Subscribe for more!",
    musicFile: params.get('musicFile') || "backgrounds/relaxing_music.mp3",
    musicVolume: parseFloat(params.get('musicVolume')) || 0.2
  };
}

function animateContent(data) {
  const titleEl = document.getElementById('title');
  const mainTextEl = document.getElementById('mainText');
  const subTextEl = document.getElementById('subText');
  const ctaTextEl = document.getElementById('ctaText');
  const subscribeIcon = document.getElementById('subscribeIcon');

  titleEl.textContent = decodeURIComponent(data.title);
  mainTextEl.textContent = decodeURIComponent(data.mainText);
  subTextEl.textContent = decodeURIComponent(data.subText);
  ctaTextEl.textContent = decodeURIComponent(data.ctaText);

  const bgMusic = document.getElementById('bgMusic');
  bgMusic.src = decodeURIComponent(data.musicFile);
  bgMusic.volume = data.musicVolume;
  bgMusic.play().catch(e => console.log('Music autoplay blocked'));

  let tl = gsap.timeline();

  tl.from(titleEl, {opacity: 0, y: -100, duration: 1});
  tl.from(mainTextEl, {opacity: 0, scale: 0.8, duration: 1});
  tl.from(subTextEl, {opacity: 0, y: 100, duration: 1});

  tl.to(ctaTextEl, {opacity: 1, scale: 1.1, duration: 1, delay: 0.5});
  tl.to(ctaTextEl, {scale: 1, duration: 0.3});

  tl.set(subscribeIcon, {display: 'block'});
  tl.from(subscribeIcon, {opacity: 0, scale: 0.5, duration: 0.7, ease: "bounce"});
}

const data = getQueryParams();
animateContent(data);
