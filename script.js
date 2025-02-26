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
      <strong>Hi, ${userName}.</strong> Meeting you was so exciting for me, but I was also incredibly nervous. While waiting for you outside, all sorts of thoughts were racing through my head—I was even practicing how to greet you properly. I had absolutely no control over how I would react when I finally saw you.<br><br>

      Then, I noticed some dogs nearby, and one of them looked familiar—I recognized it from your Snap. And suddenly, you descended from the heavens, looking absolutely stunning in that green outfit. I was mesmerized.<br><br>

      And what did I end up saying? <em>"Wo pilla tumhare Snap me tha na?"</em> LOL. In my head, I was like, "<em>#@$ diya</em>"—and from there, everything went downhill. I couldn’t even give you the flower I had brought, and things got a little awkward.<br><br>

      <strong>Anyway, touch the flower 🌼</strong>
  `;

  // Play/Pause toggle functionality
  const playButton = document.getElementById("playButton");
  const audio = new Audio("your-song.mp3"); // Change to your actual song file

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
  const audio = new Audio('Marc Wavy - Daydreaming.mp3'); // Replace with your song file
  audio.play();
}
