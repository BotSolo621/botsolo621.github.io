const bgDiv = document.getElementById("bg-cycle");
const randomIndex = Math.floor(Math.random() * 4) + 1;
bgDiv.style.backgroundImage = `url('/src/assets/Backgrouds/${randomIndex}.png')`;