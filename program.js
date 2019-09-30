let InstrucaoEl = document.querySelector('#INSTRUCTION');
let ModalEl = document.querySelector('.bg-modal');

InstrucaoEl.addEventListener('click', function()
{
  ModalEl.style.display = 'flex';
});

ModalEl.addEventListener('click', function()
{
    ModalEl.style.display = 'none';
});
