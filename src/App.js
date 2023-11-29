import React from 'react';
import { Howl } from 'howler';
import beepSoundFile from './beep-sound.mp3'; // Importing the beep sound file

// Define the beep sound
const beepSound = new Howl({
  src: [beepSoundFile]
});

function App() {
  // Function to play the beep sound for a specified duration
  const playBeepForDuration = (duration) => {
    const soundId = beepSound.play();

    // Stop the sound after 'duration' milliseconds
    setTimeout(() => {
      beepSound.stop(soundId);
    }, duration);
  };

  return (
    <div className="App">
      <h1>Beep Sound Example</h1>
      {/* Play beep for 1000 milliseconds (1 second) when button is clicked */}
      <button onClick={() => playBeepForDuration(70)}>Play Beep for 1 Second</button>
    </div>
  );
}

export default App;
