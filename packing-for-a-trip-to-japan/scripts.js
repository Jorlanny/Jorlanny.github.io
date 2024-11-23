document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    const audio = new Audio('audio/correct-choice.mp3');
    audio.play();
  });
});
