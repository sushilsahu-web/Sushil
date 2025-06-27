// Show/hide main content sections (like Best Teacher, Gamers, etc.)
function toggleContent(id) {
  const clickedBox = document.getElementById(id);
  const isVisible = clickedBox.style.display === "block";
  const boxes = document.querySelectorAll(".content-box");
  boxes.forEach(box => box.style.display = "none");
  if (!isVisible) {
    clickedBox.style.display = "block";
  }
}

// Show/hide friend content boxes
function toggleFriend(id) {
  const selected = document.getElementById(id);
  const isVisible = selected.style.display === "block";
  const allFriendBoxes = document.querySelectorAll(".friend-box");
  allFriendBoxes.forEach(box => box.style.display = "none");
  if (!isVisible) {
    selected.style.display = "block";
  }
}

// Toggle classmate info when name button is clicked
function toggleInfo(button) {
  const allInfos = document.querySelectorAll('.classmate-info');
  const allButtons = document.querySelectorAll('.classmate-button:not(#mainClassmateBtn)');
  allInfos.forEach(info => info.style.display = 'none');
  allButtons.forEach(btn => btn.classList.remove('active'));
  const infoDiv = button.nextElementSibling;
  infoDiv.style.display = 'block';
  button.classList.add('active');
}

// Toggle classmate list visibility (show/hide)
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

// Image slider functions
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

// Load first slide on page load
window.onload = function () {
  showSlide(currentSlide);
};
