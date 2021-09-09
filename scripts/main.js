const div = document.createElement('div');
div.classList.add('maindiv');
div.setAttribute("id", "mndiv");
for(let i=0;i<256;i++)
{
    const divx=document.createElement('div');
    divx.classList.add('opdiv'); 
    div.appendChild(divx);
}

const move = document.querySelector('body');
move.appendChild(div);


function makeNew(n){
  for(let i=0;i<n*n;i++)
{
    const divx=document.createElement('div');
    divx.classList.add('opdiv'); 
    div.appendChild(divx);
}
}
var n;
var slider1 = document.getElementById("slider");
var output1 = document.getElementById("value");
const clr = document.querySelector("#picker");
slider1.oninput = function() {
  output1.innerHTML = `${this.value}x${this.value}`;
  var x = document.getElementById("mndiv").querySelectorAll(".opdiv"); 
  x.forEach(div => {
    div.remove();
  });
  n=512/this.value;
  makeNew(this.value);
  const cmn= document.querySelector(".maindiv");
  cmn.style.gridTemplateColumns=`repeat(auto-fill, minmax(${n}px, 1fr))`;
  cmn.style.gridTemplateRows=`repeat(auto-fill, minmax(${n}px, 1fr))`;
  var c = document.getElementById("mndiv").querySelectorAll(".opdiv");
  c.forEach(div => {
  div.style.width=`${n}px`;
  div.style.height=`${n}px`;
});
}
let vl=clr.value;
const btn1=document.querySelector("#clrmode");
const btn2=document.querySelector("#rainmode");
const btn3=document.querySelector("#eraser");
const btn4=document.querySelector("#clear");
btn1.addEventListener("click",()=>{
  btn1.style.backgroundColor="rgb(6, 9, 54)";
  btn2.style.backgroundColor="grey";
  btn3.style.backgroundColor="grey";
  btn4.style.backgroundColor="grey";
    
    vl=clr.value;
});
btn2.addEventListener("click",()=>{

  btn2.style.backgroundColor="rgb(6, 9, 54)";
  btn1.style.backgroundColor="grey";
  btn3.style.backgroundColor="grey";
  btn4.style.backgroundColor="grey";
  vl="green";
});
btn3.addEventListener("click",()=>{

  btn3.style.backgroundColor="rgb(6, 9, 54)";
  btn1.style.backgroundColor="grey";
  btn2.style.backgroundColor="grey";
  btn4.style.backgroundColor="grey";
  vl="white";
});
btn4.addEventListener("click",()=>{

  btn4.style.backgroundColor="rgb(6, 9, 54)";
  btn1.style.backgroundColor="grey";
  btn2.style.backgroundColor="grey";
  btn3.style.backgroundColor="grey";
  vl="white";
  var px = document.getElementById("mndiv").querySelectorAll(".opdiv"); 
  px.forEach(div => {
    div.style.backgroundColor="white";
  });
  setTimeout(function(){btn4.style.backgroundColor="grey";},100);
});

function rainbow(){
  let colorr;
  const randomR = Math.floor(Math.random() * 256)
  const randomG = Math.floor(Math.random() * 256)
  const randomB = Math.floor(Math.random() * 256)
  colorr=`rgb(${randomR}, ${randomG}, ${randomB})`;
  return colorr;
}
div.addEventListener("mouseover",(e)=>{
  if(btn1.style.backgroundColor=="rgb(6, 9, 54)")
  {
    e.target.style.backgroundColor=`${clr.value}`;
  }
  else if(btn2.style.backgroundColor=="rgb(6, 9, 54)")
  {
    e.target.style.backgroundColor=`${rainbow()}`;
  }
  else{
    e.target.style.backgroundColor=`${vl}`;
  }
  
});