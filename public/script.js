const texts = [
  "10+ years Engineering Leadership",
  "SRE & Cloud Architect",
  "Ray & Machine Learning Enthusiast",
  "Philomath"
];

const typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];
  typingElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 100); // typing speed
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50); // deleting speed
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // pause before deleting
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeEffect, 500); // pause before next word
    }
  }
}


typeEffect();
