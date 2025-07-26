const inputs = document.querySelectorAll('.code');

inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      input.value = '';
      setTimeout(() => {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }, 10);
    } else if (e.key === 'Backspace') {
      if (input.value === '') {
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = '';
        }
      } else {
        input.value = '';
      }
    } else {
      e.preventDefault(); // only allow digits
    }
  });

  input.addEventListener('input', () => {
    const value = input.value;
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});
