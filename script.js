  const inputs = document.querySelectorAll(".code");
    inputs[0].focus();

    inputs.forEach((input, idx) => {
      input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.match(/^[0-9]$/)) {
          input.value = value;
          if (idx < inputs.length - 1) inputs[idx + 1].focus();
        } else {
          input.value = '';
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace") {
          if (input.value === '') {
            if (idx > 0) {
              inputs[idx - 1].focus();
              inputs[idx - 1].value = '';
              e.preventDefault();
            }
          } else {
            input.value = '';
            e.preventDefault();
          }
        } else if (e.key >= '0' && e.key <= '9') {
          // allow
        } else if (e.key === "Tab" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
          // allow tab and arrows
        } else {
          e.preventDefault();
        }
      });
    });