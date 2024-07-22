/* Limpar placeholder nos campos input */

function handleInputEvents(event) {
    if (event.type === 'focus') {
      event.target.dataset.placeholder = event.target.placeholder;
      event.target.placeholder = '';
    } else if (event.type === 'blur') {
      event.target.placeholder = event.target.dataset.placeholder;
    }
  }
  
  const inputFields = document.querySelectorAll('.input-field');
  
  inputFields.forEach(input => {
    input.addEventListener('focus', handleInputEvents);
    input.addEventListener('blur', handleInputEvents);
  });