<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="theme-color" content="#0b2a4a">
<title>Charles River Boat Company — Follow the Tour</title>
<style>
  :root{
    --navy:#102a43; --navy-2:#1b3a5b; --river:#4a7fa8; --river-light:#dce8f1;
    --gold:#b8924a; --gold-soft:#cda866; --paper:#faf8f3; --ink:#16202c; --muted:#5f6b7a;
    --hl:#f6ecd6; --hl-edge:#b8924a; --done:#9aa6b4;
  }
  *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
  html,body{margin:0;padding:0;}
  body{font-family:'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif;
    background:var(--paper);color:var(--ink);overscroll-behavior:none;}
  .hidden{display:none !important;}

  /* picker */
  #picker{position:fixed;inset:0;
    background:radial-gradient(120% 80% at 50% -10%, var(--navy-2) 0%, var(--navy) 58%, #0b2030 100%);
    color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;
    padding:32px 24px;text-align:center;z-index:50;}
  #picker .brand{display:flex;flex-direction:column;align-items:center;margin-bottom:6px;}
  #picker .mark{width:54px;height:34px;color:var(--gold-soft);margin-bottom:14px;}
  #picker .wordmark{font-family:'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif;
    font-size:19px;letter-spacing:.16em;text-transform:uppercase;color:#f4f1ea;line-height:1.3;
    max-width:260px;font-weight:500;}
  #picker .brand-sub{font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;letter-spacing:.42em;
    text-transform:uppercase;color:var(--gold-soft);margin-top:9px;}
  #picker .rule{width:46px;height:2px;background:var(--gold);opacity:.8;margin:24px 0 22px;border-radius:2px;}
  #picker h1{font-weight:400;font-size:33px;line-height:1.12;margin:0 0 12px;letter-spacing:.4px;color:#fff;}
  #picker .sub{color:#aebfd0;font-size:15px;max-width:320px;margin:0 0 38px;line-height:1.55;
    font-family:'Helvetica Neue',Arial,sans-serif;}
  .lang-list{width:100%;max-width:330px;display:flex;flex-direction:column;gap:11px;}
  .lang-btn{display:flex;align-items:center;justify-content:space-between;
    background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.18);color:#fff;
    border-radius:12px;padding:16px 20px;font-family:inherit;font-size:18px;cursor:pointer;
    transition:background .15s,border-color .15s,transform .05s;}
  .lang-btn:active{transform:scale(.985);}
  .lang-btn:hover{background:rgba(184,146,74,.14);border-color:var(--gold-soft);}
  .lang-btn .native{color:#90a3b8;font-size:13px;font-family:'Helvetica Neue',Arial,sans-serif;}
  .picker-foot{margin-top:36px;color:#76879c;font-size:11px;letter-spacing:.05em;
    font-family:'Helvetica Neue',Arial,sans-serif;}

  /* tour shell */
  #tour{display:flex;flex-direction:column;height:100vh;height:100dvh;}
  header.bar{background:var(--navy);color:#fff;padding:10px 14px;display:flex;align-items:center;gap:10px;
    flex:0 0 auto;box-shadow:0 2px 10px rgba(0,0,0,.18);z-index:10;}
  header.bar .home{background:none;border:none;color:#cdd9e6;font-size:20px;cursor:pointer;padding:4px 6px;line-height:1;}
  header.bar .stop-meta{flex:1;min-width:0;}
  header.bar .stop-kicker{font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;letter-spacing:.18em;
    text-transform:uppercase;color:var(--gold);}
  header.bar .stop-title{font-size:16px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  header.bar .langtag{font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;
    border:1px solid rgba(255,255,255,.3);border-radius:20px;padding:4px 10px;color:#dce7f1;cursor:pointer;white-space:nowrap;}

  .progress{height:3px;background:rgba(255,255,255,.15);flex:0 0 auto;}
  .progress > div{height:100%;width:0;background:var(--gold);transition:width .3s linear;}

  .stage{position:relative;flex:0 0 auto;background:#0a2138;height:32vh;min-height:170px;max-height:260px;overflow:hidden;}
  .stage img{width:100%;height:100%;object-fit:cover;display:block;opacity:.97;}
  .stage .cap{position:absolute;left:0;right:0;bottom:0;
    background:linear-gradient(transparent, rgba(7,24,42,.85));color:#eaf1f8;
    font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;letter-spacing:.04em;padding:26px 14px 10px;}

  .script{flex:1 1 auto;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:18px 18px 140px;}
  .line{font-size:19px;line-height:1.5;color:var(--muted);padding:11px 14px;margin:3px 0;border-radius:11px;
    border-left:3px solid transparent;cursor:pointer;transition:color .25s,background .25s,border-color .25s;}
  .line.done{color:var(--done);}
  .line.active{color:var(--ink);background:var(--hl);border-left-color:var(--hl-edge);font-weight:500;
    box-shadow:0 4px 16px rgba(184,146,74,.16);}
  .line .bullet{color:var(--gold);margin-right:8px;}

  .end-note{text-align:center;color:var(--muted);font-size:14px;font-family:'Helvetica Neue',Arial,sans-serif;
    padding:24px 12px;border-top:1px solid #e4ddcc;margin-top:18px;}

  #cruise{display:none;align-items:center;justify-content:center;gap:8px;flex:0 0 auto;
    background:var(--river-light);color:var(--navy);font-family:'Helvetica Neue',Arial,sans-serif;
    font-size:13px;letter-spacing:.05em;padding:9px 14px;border-bottom:1px solid #c7dcea;}
  #cruise.on{display:flex;}
  #cruise .wave{animation:bob 1.4s ease-in-out infinite;font-size:16px;}
  @keyframes bob{0%,100%{transform:translateX(-3px)}50%{transform:translateX(3px)}}
  @media (prefers-reduced-motion:reduce){#cruise .wave{animation:none;}}

  .controls{position:fixed;left:0;right:0;bottom:0;background:rgba(247,245,239,.94);backdrop-filter:blur(10px);
    border-top:1px solid #e2dac9;padding:10px 14px calc(10px + env(safe-area-inset-bottom));
    display:flex;align-items:center;gap:10px;z-index:20;}
  .controls button{font-family:'Helvetica Neue',Arial,sans-serif;border:1px solid #d6cdb8;background:#fff;
    color:var(--navy);border-radius:12px;cursor:pointer;font-size:14px;}
  .ctl-side{padding:11px 14px;font-size:18px;min-width:46px;}
  .play{flex:1;background:var(--navy);color:#fff;border-color:var(--navy);padding:13px;font-size:16px;font-weight:600;letter-spacing:.02em;}
  .play.paused{background:var(--gold);border-color:var(--gold);color:#3a2c08;}
  .speed{padding:11px 12px;font-size:13px;min-width:52px;font-weight:600;}
  .speed.on{background:var(--river-light);border-color:var(--river);color:var(--navy);}

  #sheet{position:fixed;inset:0;background:rgba(7,24,42,.55);z-index:40;display:flex;align-items:flex-end;}
  #sheet .panel{background:var(--paper);width:100%;max-height:78vh;border-radius:18px 18px 0 0;overflow-y:auto;padding:8px 0 24px;}
  #sheet .grab{width:42px;height:5px;background:#cfc6b2;border-radius:3px;margin:10px auto 6px;}
  #sheet h3{font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;letter-spacing:.2em;text-transform:uppercase;
    color:var(--muted);text-align:center;margin:6px 0 12px;font-weight:600;}
  .stop-row{display:flex;align-items:center;gap:12px;padding:13px 20px;cursor:pointer;border-bottom:1px solid #ece6d8;}
  .stop-row .num{font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;color:#fff;background:var(--river);
    min-width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:0 0 auto;}
  .stop-row.current .num{background:var(--gold);color:#3a2c08;}
  .stop-row .nm{font-size:17px;}
  .stop-row .mn{margin-left:auto;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;color:var(--muted);}
</style>
</head>
<body>

<section id="picker">
  <div class="brand">
    <svg class="mark" viewBox="0 0 64 40" aria-hidden="true">
      <path d="M6 30 Q14 24 22 30 T38 30 T54 30" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M6 35 Q14 29 22 35 T38 35 T54 35" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" opacity=".55"/>
      <path d="M32 6 L32 22 M32 22 L20 22 Q24 14 32 6 Z M32 22 L44 22 Q40 14 32 6" fill="currentColor" opacity=".9"/>
      <line x1="32" y1="3" x2="32" y2="22" stroke="currentColor" stroke-width="1.6"/>
    </svg>
    <div class="wordmark">Charles River Boat Company</div>
    <div class="brand-sub">Boston &amp; Cambridge</div>
  </div>
  <div class="rule"></div>
  <h1>Follow the Tour</h1>
  <p class="sub" id="pickerSub"></p>
  <div class="lang-list" id="langList"></div>
  <div class="picker-foot" id="pickerFoot"></div>
</section>

<section id="tour" class="hidden">
  <header class="bar">
    <button class="home" id="homeBtn" aria-label="Stops">☰</button>
    <div class="stop-meta">
      <div class="stop-kicker"><span id="stopNum">1</span> / <span id="stopTotal">37</span> · <span id="uiStop">Stop</span></div>
      <div class="stop-title" id="stopTitle">—</div>
    </div>
    <div class="langtag" id="langTag">EN</div>
  </header>
  <div class="progress"><div id="progressBar"></div></div>
  <div class="stage" id="stage">
    <img id="stageImg" alt="" src="">
    <div class="cap" id="stageCap"></div>
  </div>
  <div id="cruise"><span class="wave">⌁</span> <span id="cruiseLbl"></span></div>
  <div class="script" id="script"></div>
  <div class="controls">
    <button class="ctl-side" id="prevStop" aria-label="Previous stop">⏮</button>
    <button class="play paused" id="playBtn">▶︎ <span id="playLbl">Start</span></button>
    <button class="ctl-side" id="nextStop" aria-label="Next stop">⏭</button>
    <button class="speed" id="speedBtn">1×</button>
  </div>
</section>

<div id="sheet" class="hidden">
  <div class="panel">
    <div class="grab"></div>
    <h3 id="uiStops">Tour stops</h3>
    <div id="stopList"></div>
  </div>
</div>

<script src="tour.js"></script>
<script>
let lang="en", stopIx=0, lineIx=-1, playing=false, timer=null, remaining=0, lastTick=0;
const SPEEDS=[1,1.5,2,0.75]; let speedIx=0;
const $=s=>document.querySelector(s);

const langList=$("#langList");
LANGS.forEach(l=>{
  const b=document.createElement("button");
  b.className="lang-btn";
  b.innerHTML=`<span>${l.label}</span><span class="native">${l.native}</span>`;
  b.onclick=()=>chooseLang(l.code);
  langList.appendChild(b);
});

function chooseLang(code){
  lang=code;
  $("#picker").classList.add("hidden");
  $("#tour").classList.remove("hidden");
  $("#langTag").textContent=code.toUpperCase();
  $("#stopTotal").textContent=TOUR.length;
  loadStop(0);
}
// localise picker text to whichever lang button is hovered? keep EN default but show all 3 lines:
$("#pickerSub").textContent=UI.en.tagline;
$("#pickerFoot").textContent=UI.en.foot;

function loadStop(ix){
  $("#cruise").classList.remove("on");
  stopIx=Math.max(0,Math.min(TOUR.length-1,ix));
  const stop=TOUR[stopIx];
  $("#stopNum").textContent=stopIx+1;
  $("#uiStop").textContent=UI[lang].stop;
  $("#stopTitle").textContent=stop.title[lang];
  $("#uiStops").textContent=UI[lang].stops;
  $("#stageImg").src=stop.img;
  $("#stageImg").alt=stop.title[lang];
  $("#stageCap").textContent=stop.caption?stop.caption[lang]:"";
  renderScript();
  lineIx=-1;
  setLine(0,false);
  pause(true);
  $("#playLbl").textContent=UI[lang].start;
  $("#script").scrollTop=0;
}

function renderScript(){
  const wrap=$("#script"); wrap.innerHTML="";
  TOUR[stopIx].lines.forEach((ln,i)=>{
    const d=document.createElement("div");
    d.className="line"; d.dataset.i=i;
    d.innerHTML=`<span class="bullet">•</span>${ln.text[lang]}`;
    d.onclick=()=>{ setLine(i,playing); scrollToActive(); };
    wrap.appendChild(d);
  });
  const end=document.createElement("div");
  end.className="end-note"; end.textContent=UI[lang].end;
  wrap.appendChild(end);
}

function curLines(){ return TOUR[stopIx].lines; }

function setLine(i,autorun){
  clearTimeout(timer); lineIx=i;
  [...document.querySelectorAll(".line")].forEach(el=>{
    const n=+el.dataset.i;
    el.classList.toggle("active",n===i);
    el.classList.toggle("done",n<i);
  });
  updateProgress();
  if(i>=0&&i<curLines().length){
    remaining=curLines()[i].sec*1000/SPEEDS[speedIx];
    if(autorun) run();
  }
}
function run(){ playing=true; $("#playBtn").classList.remove("paused");
  $("#playLbl").textContent=UI[lang].pause; lastTick=Date.now(); tick(); }
function tick(){ clearTimeout(timer); timer=setTimeout(advance,remaining); }
function advance(){
  if(lineIx<curLines().length-1){ setLine(lineIx+1,true); scrollToActive(); }
  else if(stopIx<TOUR.length-1){
    // cruise to the next landmark across the travel gap
    cruiseToNext();
  } else { pause(true); $("#playLbl").textContent=UI[lang].start; }
}
function cruiseToNext(){
  const travel=(TOUR[stopIx+1].travel||0)*1000/SPEEDS[speedIx];
  $("#cruise").classList.add("on");
  $("#cruiseLbl").textContent=UI[lang].cruising;
  clearTimeout(timer);
  timer=setTimeout(()=>{
    $("#cruise").classList.remove("on");
    loadStop(stopIx+1);
    setLine(0,true); run();
  }, Math.max(800,travel));
}
function pause(silent){
  playing=false; clearTimeout(timer);
  $("#cruise").classList.remove("on");
  if(!silent&&lastTick){ remaining-=(Date.now()-lastTick); if(remaining<300) remaining=300; }
  $("#playBtn").classList.add("paused");
  $("#playLbl").textContent=lineIx<=0?UI[lang].start:UI[lang].resume;
}
function togglePlay(){ if(playing) pause(false); else { if(lineIx<0) setLine(0,false); run(); } }
function scrollToActive(){ const el=document.querySelector(".line.active"); if(el) el.scrollIntoView({behavior:"smooth",block:"center"}); }
function updateProgress(){
  let done=0,total=0;
  TOUR.forEach((s,si)=>s.lines.forEach((_,li)=>{ total++; if(si<stopIx||(si===stopIx&&li<=lineIx)) done++; }));
  $("#progressBar").style.width=(100*done/total)+"%";
}

$("#playBtn").onclick=togglePlay;
$("#prevStop").onclick=()=>loadStop(stopIx-1);
$("#nextStop").onclick=()=>loadStop(stopIx+1);
$("#speedBtn").onclick=()=>{
  speedIx=(speedIx+1)%SPEEDS.length; const sp=SPEEDS[speedIx];
  const btn=$("#speedBtn"); btn.textContent=sp+"×"; btn.classList.toggle("on",sp!==1);
  if(lineIx>=0){ remaining=curLines()[lineIx].sec*1000/sp; if(playing){ lastTick=Date.now(); tick(); } }
};

$("#homeBtn").onclick=openSheet;
$("#sheet").onclick=e=>{ if(e.target.id==="sheet") closeSheet(); };
function openSheet(){
  const list=$("#stopList"); list.innerHTML="";
  TOUR.forEach((s,i)=>{
    const secs=s.lines.reduce((a,l)=>a+l.sec,0);
    const row=document.createElement("div");
    row.className="stop-row"+(i===stopIx?" current":"");
    row.innerHTML=`<span class="num">${i+1}</span><span class="nm">${s.title[lang]}</span><span class="mn">${(secs/60).toFixed(1)} min</span>`;
    row.onclick=()=>{ closeSheet(); loadStop(i); };
    list.appendChild(row);
  });
  $("#sheet").classList.remove("hidden");
}
function closeSheet(){ $("#sheet").classList.add("hidden"); }

$("#langTag").onclick=()=>{ pause(true); $("#tour").classList.add("hidden"); $("#picker").classList.remove("hidden"); };
</script>
</body>
</html>
