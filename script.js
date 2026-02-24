// Reveal sections as you scroll
const els = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);

els.forEach((el) => obs.observe(el));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();