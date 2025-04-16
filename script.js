const greetingText = document.getElementById('greetingText');
const daisy1 = document.getElementById('daisy1');
const playButton = document.getElementById('playButton');
const sections = document.querySelectorAll('section');

let currentSection = 0;

// Greet the user by name
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('name') || 'Ruchi'; // Default to 'Ruchi' if no name is provided

document.addEventListener("DOMContentLoaded", function () {
  // Get URL param or default to 'Friend'
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get('name') || 'Ruchi';

  // Update greeting text
document.getElementById("greetingText").innerHTML = `
    <strong>Hi, ${userName}.</strong> I enjoy every minute of this or maybe i'm trying to. <br>
   🩵🩵🩵🩵🩵<br>

    <strong>I rush alot ik.</strong><br>But, I shouldnt be sorry for loving. <br>
`;

  // Play/Pause toggle functionality
  const playButton = document.getElementById("playButton");
  const audio = new Audio('The Pool.mp3'); // Change to your actual song file

  playButton.addEventListener("click", function () {
      if (audio.paused) {
          audio.play();  // Play if paused
      } else {
          audio.pause();  // Pause if playing (keeps current position)
      }
  });
});



// Function to show the next section
function showNextSection() {
  sections[currentSection].classList.remove('active');
  currentSection++;
  if (currentSection < sections.length) {
    sections[currentSection].classList.add('active');
  }
}

// Daisy Click Event (Stage 1)
daisy1.addEventListener('click', () => {
  showNextSection();
});

// Play Button Click Event (Stage 2)
playButton.addEventListener('click', () => {
  playSong();
});

// Play song
function playSong() {
  const audio = new Audio('The Pool.mp3'); // Replace with your song file
  audio.play();
}
