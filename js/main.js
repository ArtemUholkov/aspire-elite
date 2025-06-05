document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.phone-video');
  if (!video) return;

  // Toggle mute/unmute on video click
  video.addEventListener('click', function () {
    video.muted = !video.muted;
  });
});
