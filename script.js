function toggleContent(id) {
  const clickedBox = document.getElementById(id);
  const isVisible = clickedBox.style.display === "block";
  const boxes = document.querySelectorAll(".content-box");

  boxes.forEach(box => box.style.display = "none");

  if (!isVisible) {
    clickedBox.style.display = "block";
  }
}

function toggleFriend(id) {
  const selected = document.getElementById(id);
  const isVisible = selected.style.display === "block";
  const allFriendBoxes = document.querySelectorAll(".friend-box");

  allFriendBoxes.forEach(box => box.style.display = "none");

  if (!isVisible) {
    selected.style.display = "block";
  }
}
const classmates = [
  "Shyaam Rathia", "Jitesh Rathia", "Omprakash Pradhan", "Deepak Yadav", "Narsing Yadav",
  "Avinash Ajgalle", "Akhil Tirkey", "Abhishek Tigga", "Adan Ekka", "Benjamin Toppo",
  "Anuraj Tirkey", "Anurag Toppo", "Sandip Lakra", "Lokesh Kumar Mahant", "Yogesh Sarthi",
  "Rohan Sidar", "Roopa Rathia", "Ansuiya Rathia", "Neha Sarthi", "Kanchan Mahanand",
  "Shraddha Miree", "Siddhi Rani Dansena", "Monika Gupta", "Annpurna Mahant", "Anastasia"
];

// Generate classmate buttons dynamically
const classmateList = document.getElementById("classmateList");

classmates.forEach((name, index) => {
  classmateList.innerHTML += `
    <div class="classmate-item">
      <button class="classmate-button" onclick="toggleInfo(this)">${name}</button>
      <div class="classmate-info">
        <img src="cm${index + 1}.jpg" alt="${name}">
        <p>${name}</p>
      </div>
    </div>
  `;
});

// Toggle classmate info
function toggleInfo(button) {
  const allInfos = document.querySelectorAll('.classmate-info');
  const allButtons = document.querySelectorAll('.classmate-button:not(#mainClassmateBtn)');

  allInfos.forEach(info => info.style.display = 'none');
  allButtons.forEach(btn => btn.classList.remove('active'));

  const infoDiv = button.nextElementSibling;
  infoDiv.style.display = 'block';
  button.classList.add('active');
}

// Toggle main classmate list visibility
document.getElementById("mainClassmateBtn").addEventListener("click", () => {
  const list = document.getElementById("classmateList");
  const btn = document.getElementById("mainClassmateBtn");

  if (list.style.display === "none") {
    list.style.display = "block";
    btn.textContent = "Hide Classmates";
  } else {
    list.style.display = "none";
    btn.textContent = "Show Classmates";
  }
});

const sliderImages = [
  "a1.jpg", "a2.jpg", "kaj3.jpg", "kaj4.jpg", "kaj5.jpg",
  "kaj6.jpg", "kaj7.jpg", "kaj8.webp", "kaj9.webp", "kaj10.webp",
  "kaj11.webp", "kaj12.webp", "kaj13.jpg", "kaj14.webp", "kaj15.jpg"
];

let currentSlide = 0;

function showSlide(index) {
  const img = document.getElementById("slider-image");
  currentSlide = (index + sliderImages.length) % sliderImages.length;
  img.src = sliderImages[currentSlide];
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

window.onload = function () {
  showSlide(currentSlide); // Page load hone pe first image dikhayega
};
