const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }
}, {
  threshold: 0.2,
});

reveals.forEach((element) => observer.observe(element));

const role = document.getElementById('role');
const roles = ['JavaScript', 'React', 'Python', 'APIs REST'];
let roleIndex = 0;

setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  role.textContent = roles[roleIndex];
}, 2500);