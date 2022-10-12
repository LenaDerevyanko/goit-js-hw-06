const btnRef = document.querySelector('.change-color');
const styleWindowRef = document.querySelector('body');
const codeColorRef = document.querySelector('.color');
btnRef.addEventListener('click', () => {
  const colors = getRandomHexColor()
  document.body.style.backgroundColor = colors
  codeColorRef.textContent = colors
})

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`
  };

