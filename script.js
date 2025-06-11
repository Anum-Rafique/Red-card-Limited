


// <!-- Script to show popup after 4 seconds -->
window.onload = function () {
  setTimeout(() => {
    document.getElementById('welcomePopup').classList.add('active');
  }, 4000);
};

function closePopup() {
  document.getElementById('welcomePopup').classList.remove('active');
}

//   login
const modal = document.getElementById("authModal");
const loginBox = document.getElementById("loginBox");
const modalTitle = document.getElementById("modalTitle");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
  showLogin(); // reset to login when closed
}

function toggleAuth() {
  const isLogin = modalTitle.innerText === "Login";
  modalTitle.innerText = isLogin ? "Register" : "Login";
  loginBox.innerHTML = `
      <div class="close-modal" onclick="closeModal()">&times;</div>
      <h2 id="modalTitle">${isLogin ? 'Register' : 'Login'}</h2>
      ${isLogin
      ? `<input type="text" placeholder="Full Name">
           <input type="email" placeholder="Email">
           <input type="password" placeholder="Password">
           <button>Register</button>
           <div class="toggle-form">Already have an account? <a onclick="toggleAuth()">Login</a></div>`
      : `<input type="email" placeholder="Email">
           <input type="password" placeholder="Password">
           <button>Login</button>
           <div class="toggle-form">Don't have an account? <a onclick="toggleAuth()">Register</a></div>`
    }`;
}

function showLogin() {
  modalTitle.innerText = "Login";
  loginBox.innerHTML = `
      <div class="close-modal" onclick="closeModal()">&times;</div>
      <h2 id="modalTitle">Login</h2>
      <input type="email" placeholder="Email">
      <input type="password" placeholder="Password">
      <button>Login</button>
      <div class="toggle-form">Don't have an account? <a onclick="toggleAuth()">Register</a></div>
    `;
}

//   slider
let index = 0;

function showSlide() {
  const slides = document.querySelector('.slides');
  index = (index + 1) % 3; // 3 slides
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Auto change every 3 seconds
setInterval(showSlide, 3000);


//  about us
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.about-section').style.opacity = '1';
});



// contact page
//    const form = document.getElementById('contactForm');
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   alert("Thanks for contacting us! We'll get back to you soon.");
//   form.reset();
// });






 //checkout


