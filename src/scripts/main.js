const bgDiv = document.getElementById("bg-cycle");
const randomIndex = Math.floor(Math.random() * 2) + 1;
bgDiv.style.backgroundImage = `url('/src/assets/backgrouds/${randomIndex}.png')`;

function scrollToAbout() {
    const section = document.getElementById("aboutSection");
    const yOffset = -40; // Adjust offset if needed
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' })}