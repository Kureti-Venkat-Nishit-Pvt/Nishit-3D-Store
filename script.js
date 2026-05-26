document.querySelectorAll('.card').forEach(card=>{
card.addEventListener('mousemove',()=>{card.style.transform='translateY(-10px) scale(1.03)'});
card.addEventListener('mouseleave',()=>{card.style.transform='translateY(0px)'});
});