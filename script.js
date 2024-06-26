// Get DOM elements
const menuToggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Event Listners
// 1. Listen to click on toggle button
menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
});


// 2. Listen to click on open button
open.addEventListener('click', () => modal.classList.add('show-modal'));

// 3. Listen to click on close button
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// 4. Listen for click outside od modal
window.addEventListener('click', e => 
    e.target === modal ? modal.classList.remove('show-modal') : false
)