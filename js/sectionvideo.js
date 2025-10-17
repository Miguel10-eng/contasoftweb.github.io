// === Reproducir el video con audio al hacer clic ===
document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playVideoBtn");
  const video = document.getElementById("promoVideo");

  if (playButton && video) {
    playButton.addEventListener("click", function () {
      // Desactivar silencio y reproducir video
      video.muted = false;
      video.play();

      // Cambiar texto del botón mientras se reproduce
      playButton.innerHTML = 'Reproduciendo... <i class="fas fa-volume-up ms-2"></i>';
      playButton.disabled = true;

      // Efecto visual suave
      video.classList.add("video-playing");
      setTimeout(() => {
        video.classList.remove("video-playing");
      }, 1000);

      // Restaurar botón cuando termine el video
      video.addEventListener("ended", function () {
        playButton.innerHTML = 'Ver el video <i class="fas fa-arrow-right ms-2"></i>';
        playButton.disabled = false;
      });
    });
  }
});
