
function order(product){
window.open(
'https://wa.me/910000000000?text='+
encodeURIComponent('Hi, I want to order '+product),
'_blank');
}

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('visible');
}
});
},{threshold:.2});

document.querySelectorAll('.product-card').forEach(card=>{
observer.observe(card);
});

document.addEventListener('mousemove',(e)=>{
document.querySelector('.hero').style.backgroundPosition=
`${50 + e.clientX/window.innerWidth*3}% ${50 + e.clientY/window.innerHeight*3}%`;
});
