const modalEl = document.querySelector('.modal');

window.addEventListener('click', event => {
    if(event.target.classList.contains('join-button')) modalEl.classList.add('open');
    if(event.target.classList.contains('close')) modalEl.classList.remove('open');
    if(event.target.classList.contains('modal')) modalEl.classList.remove('open');
});