const overlay = document.getElementById('overlay');
  const overlayImg = document.getElementById('overlay-img');
  const closeBtn = document.getElementById('close-btn');

  document.querySelectorAll('.gallery__img').forEach(img => {
    img.addEventListener('click', () => {
      overlayImg.src = img.src;
      overlay.classList.add('active');
      overlayImg.style.transform = 'scale(1.8)'; // Ajuste para ampliar a imagem
    });
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    overlayImg.style.transform = 'scale(1)'; // Resetar o tamanho da imagem ao fechar
  });

  overlay.addEventListener('click', (e) => {
    if (e.target !== overlayImg) {
      overlay.classList.remove('active');
      overlayImg.style.transform = 'scale(1)'; // Resetar o tamanho da imagem ao clicar fora da imagem
    }
  });