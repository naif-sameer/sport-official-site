let video = document.querySelector('#sport-video');
let videoBtn = document.querySelector('#video-btn');

let videoBtnIcon = document.querySelector('#video-btn-play-icon');

// images
import PauseIcon from '../images/icons/pause.svg';
import PlayIcon from '../images/icons/video.svg';

let isVideoPlayed = false;

videoBtn.addEventListener('click', () => {
  isVideoPlayed = !isVideoPlayed;

  if (isVideoPlayed) {
    videoBtnIcon.setAttribute('src', PauseIcon);
    // src/images/icons/video.svg
    // src/images/icons/pause.svg
    video.play();
  } else {
    videoBtnIcon.setAttribute('src', PlayIcon);
    video.pause();
  }
});
