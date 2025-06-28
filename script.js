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

// Classmate list
const classmates = [
  "Shyaam Rathia", "Jitesh Rathia", "Omprakash Pradhan", "Deepak Yadav", "Narsing Yadav",
  "Avinash Ajgalle", "Akhil Tirkey", "Abhishek Tigga", "Adan Ekka", "Benjamin Toppo",
  "Anuraj Tirkey", "Anurag Toppo", "Sandip Lakra", "Lokesh Kumar Mahant", "Yogesh Sarthi",
  "Rohan Sidar", "Roopa Rathia", "Ansuiya Rathia", "Nisha Sarthi", "Kanchan Mahanand",
  "Shraddha Miree", "Siddhi Rani Dansena", "Monika Gupta", "Annpurna Mahant", "Anastasia"
];

// Generate buttons for classmates
const classmateList = document.getElementById("classmateList");
classmates.forEach((name, index) => {
  const classmateItem = document.createElement("div");
  classmateItem.className = "classmate-item";

  const button = document.createElement("button");
  button.className = "classmate-button";
  button.textContent = name;
  button.onclick = function () {
    toggleInfo(this);
  };

  const infoDiv = document.createElement("div");
  infoDiv.className = "classmate-info";

  const img = document.createElement("img");
  img.src = `cm${index + 1}.jpg`; // 👈 Image name: cm1.jpg, cm2.jpg, ...
  img.alt = name;

  const p = document.createElement("p");
  p.textContent = name;

  infoDiv.appendChild(img);
  infoDiv.appendChild(p);

  classmateItem.appendChild(button);
  classmateItem.appendChild(infoDiv);
  classmateList.appendChild(classmateItem);
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

// Toggle Classmate Section Show/Hide
document.getElementById("mainClassmateBtn").addEventListener("click", () => {
  const list = document.getElementById("classmateList");
  const btn = document.getElementById("mainClassmateBtn");

  if (list.style.display === "none" || list.style.display === "") {
    list.style.display = "block";
    btn.textContent = "Hide Classmates";
  } else {
    list.style.display = "none";
    btn.textContent = "Show Classmates";
  }
});

// Slider
const sliderImages = [
  "a2.jpg", "a3.jpg", "a4.png", "a5.jpg",
  "a6.jpg", "a7.jpg"
];

let currentSlide = 0;

function showSlide(index) {
  const img = document.getElementById("slider-image");
  currentSlide = (index + sliderImages.length) % sliderImages.length;

  const realSrc = sliderImages[currentSlide];
  img.classList.remove("loaded");
  img.src = "blur.jpg"; // Placeholder image

  const tempImg = new Image();
  tempImg.src = realSrc;
  tempImg.onload = function () {
    img.src = realSrc;
    img.classList.add("loaded");
  };
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

window.onload = function () {
  showSlide(currentSlide);
};
