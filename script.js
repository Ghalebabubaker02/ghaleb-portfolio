/* Loader */
let loader=document.getElementById("loader");
let loaderText=document.getElementById("loader-text");
let load=0;
let int=setInterval(()=>{load++;loaderText.textContent=`Loading ${load}%`;
if(load>=100){clearInterval(int);loader.style.opacity="0";setTimeout(()=>loader.style.display="none",900);}},15);

/* Cursor Trail */
const cursorTrail=document.getElementById("cursor-trail");
document.addEventListener("mousemove",e=>{cursorTrail.style.left=e.pageX+"px";cursorTrail.style.top=e.pageY+"px";});

/* Lens Flare */
const flare=document.getElementById("lens-flare");
document.addEventListener("mousemove",e=>{flare.style.left=e.pageX+"px";flare.style.top=e.pageY+"px";});

/* Scroll Reveal */
const reveals=document.querySelectorAll(".reveal");
const obs=new IntersectionObserver(entries=>{
entries.forEach(ent=>{if(ent.isIntersecting){ent.target.classList.add("show");}});});
reveals.forEach(r=>obs.observe(r));

/* Story Viewer System */
const stories={editing:["videos/edit1.mp4"],clients:["videos/client1.mp4"],gear:["videos/gear1.mp4"]};
let current=null,index=0;
const viewer=document.getElementById("story-viewer");
const video=document.getElementById("story-video");
const progress=document.querySelector(".story-progress");

document.querySelectorAll(".highlight-item").forEach(el=>{
el.addEventListener("click",()=>{
current=el.dataset.story;
index=0;
openStory();
});
});

function openStory(){viewer.style.display="flex";play();}
function play(){
video.src=stories[current][index];
video.play();
progress.style.transitionDuration="5s";
progress.style.width="100%";
video.onended=()=>next();
}
function next(){
index++;
if(index>=stories[current].length){close();return;}
progress.style.width="0";setTimeout(play,100);
}
document.querySelector(".close-story").onclick=close;
function close(){
viewer.style.display="none";
video.pause();
progress.style.width="0";
}
