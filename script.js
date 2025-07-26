const gradients = [
  ['#ff6ec4', '#7873f5'],
  ['#00dbde', '#fc00ff'],
  ['#43e97b', '#38f9d7'],
  ['#ff9a9e', '#fad0c4'],
  ['#f7971e', '#ffd200'],
  ['#a1c4fd', '#c2e9fb'],
  ['#ffecd2', '#fcb69f']
];

function changeBackground() {
  const randomIndex = Math.floor(Math.random() * gradients.length);
  const [color1, color2] = gradients[randomIndex];
  const bg = document.querySelector('.gradient-bg');
  bg.style.background = `linear-gradient(270deg, ${color1}, ${color2})`;
}
// Light/Dark mode toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Update button icon/text
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.innerHTML = "🌞 Switch Theme";
  } else {
    toggleBtn.innerHTML = "🌙 Switch Theme";
  }
});
// Click to copy color card text
const cards = document.querySelectorAll(".color-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const colorText = card.innerText;
    navigator.clipboard.writeText(colorText).then(() => {
      // Show temporary message
      card.innerText = "✅ Copied!";
      setTimeout(() => {
        card.innerText = colorText;
      }, 1000);
    });
  });
});
// Typing Animation for Heading
const text = "🎨 ColorSplash Gallery";
const typingTarget = document.getElementById("typing");
let i = 0;

function typeLetter() {
  if (i < text.length) {
    typingTarget.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeLetter, 100); // speed of typing
  }
}

typeLetter(); // Start the typing animation
