function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // is there an audio document that has a data-key of e.keyCode ?
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // selects the corresponding key to add the animation
  if (!audio) return; // // if there's no audio, stop the function
  audio.currentTime = 0; // rewind to the start of the audio files : allow to replay the audio before it ends
  audio.play(); // plays the audio
  key.classList.add("playing"); // adds the class "playing" when the key is pressed
}

function removeTransition(e) {
// console.log(e);
  if (e.propertyName !== "transform") return; // skip it if it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
// listens to each key for when the transition end event happens (to make the key back to black)
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound); // listening for the keydown event and then runs the function which will give the event
