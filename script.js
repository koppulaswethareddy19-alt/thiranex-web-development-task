const menuButton=document.querySelector('.menu-btn');const navMenu=document.querySelector('#nav-menu');
if(menuButton&&navMenu){menuButton.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});}
const form=document.querySelector('#contact-form');const status=document.querySelector('#form-status');
if(form&&status){form.addEventListener('submit',e=>{e.preventDefault();status.textContent='Thank you! Your message has been recorded for this demo.';form.reset();});}