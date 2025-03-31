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
    <strong>Hi, ${userName}.</strong> I totally get your anger <br>
   Promises are meant to be kept not forget.<br>

    <strong>But communication is important yk.</strong><br>
    If we don't communicate.. i don't wanna explore that possibility. I can be very clingy at times. In all honesty; i extremely fear losing you. Mat jao na aise bina kuch bole, yeh achhi aadat nahi hai. <br>
`;

  // Play/Pause toggle functionality
  const playButton = document.getElementById("playButton");
  const audio = new Audio("Barish.mp3"); // Change to your actual song file

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
  playSong('FindingYou.mp3');
});

// Play song
function playSong() {
  const audio = new Audio('FindingYou.mp3'); // Replace with your song file
  audio.play();
}
