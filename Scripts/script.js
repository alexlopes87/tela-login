/* Limpar placeholder nos campos input */
function handleFocus(event) {
    event.target.dataset.placeholder = event.target.placeholder;
    event.target.placeholder = '';
}

function handleBlur(event) {
    event.target.placeholder = event.target.dataset.placeholder;
}

document.getElementById('email').addEventListener('focus', handleFocus);
document.getElementById('email').addEventListener('blur', handleBlur);

document.getElementById('senha').addEventListener('focus', handleFocus);
document.getElementById('senha').addEventListener('blur', handleBlur);
