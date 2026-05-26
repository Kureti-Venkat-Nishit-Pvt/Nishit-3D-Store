setTimeout(()=>{
document.getElementById('loader').style.display='none'
},2000)

function order(product){
window.open(
'https://wa.me/910000000000?text='+
encodeURIComponent('Hi, I want to order '+product),
'_blank')
}

let snowing=false;
function toggleSnow(){
snowing=!snowing;
if(snowing){
window.snow=setInterval(()=>{
const s=document.createElement('div');
s.className='snowflake';
s.innerHTML='❄';
s.style.left=Math.random()*100+'vw';
s.style.animationDuration=(Math.random()*5+3)+'s';
document.body.appendChild(s);
setTimeout(()=>s.remove(),8000);
},120);
}else{
clearInterval(window.snow);
}
}

document.querySelectorAll('.card').forEach(c=>{
c.addEventListener('mouseenter',()=>{
for(let i=0;i<8;i++){
let spark=document.createElement('div');
spark.innerHTML='✨';
spark.style.position='fixed';
spark.style.left=(Math.random()*window.innerWidth)+'px';
spark.style.top=(Math.random()*window.innerHeight)+'px';
document.body.appendChild(spark);
setTimeout(()=>spark.remove(),1000);
}
});
});
