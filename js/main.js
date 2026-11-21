
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu-btn'), links=document.querySelector('.links');
 if(btn&&links) btn.addEventListener('click',()=>{links.classList.toggle('open');btn.setAttribute('aria-expanded',links.classList.contains('open')?'true':'false')});
 const current=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.links a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
});
