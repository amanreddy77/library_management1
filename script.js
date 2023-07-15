let btnsearch = document.querySelector('button');
let input = document.querySelector('input');
btnsearch.addEventListener('click', () => {
    window.open(input.value, '_blank');
});