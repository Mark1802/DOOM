let InstrucaoEl = document.querySelector('#INSTRUCTION');
let ModalEl = document.querySelector('.bg-modal');
let CloseEl = document.querySelector('#close');

InstrucaoEl.addEventListener('click', function()
{
  ModalEl.classList.add('visible-modal');
});

CloseEl.addEventListener('click', function()
{
  ModalEl.classList.remove('visible-modal');
});
