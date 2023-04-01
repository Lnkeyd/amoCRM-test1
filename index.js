const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {

    buttonEl.disabled = true
    const endDate = Date.now() + (seconds * 1000)

    const timer = setInterval(() => {
      const diff = Math.floor((endDate - Date.now()) / 1000)

      let h = Math.floor(diff / 3600)
      let m = Math.floor((diff - h * 3600) / 60)
      let s = diff - (h * 3600 + m * 60)

      h = h < 10 ? '0' + h : h
      m = m < 10 ? '0' + m : m
      s = s < 10 ? '0' + s : s

      timerEl.textContent = `${h}:${m}:${s}`

      if (diff <= 0) {
        clearInterval(timer)
        buttonEl.disabled = false
        timerEl.textContent = 'hh:mm:ss'
      }
    }, 999)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const digits = /^[0-9]*$/
  str = e.target.value
  if (!str.match(digits)) {
    e.target.value = str.substring(0, str.length - 1)
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
