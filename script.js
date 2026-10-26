lucide.createIcons();

const header = document.getElementById("siteHeader");
const backTop = document.getElementById("backTop");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const modal = document.getElementById("bookingModal");
const bookingForm = document.getElementById("bookingForm");
const treatmentSelect = document.getElementById("treatmentSelect");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 35);
  backTop.classList.toggle("visible", window.scrollY > 500);
});

mobileMenuBtn.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  mobileMenuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  mobileMenuBtn.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
  lucide.createIcons();
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
    lucide.createIcons();
  });
});

function openBooking(service = "") {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (service) treatmentSelect.value = service;
  setTimeout(() => document.querySelector('#bookingForm input[name="name"]').focus(), 100);
}

function closeBooking() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-open-booking]").forEach(btn => {
  btn.addEventListener("click", () => openBooking());
});

document.querySelectorAll("[data-close-booking]").forEach(el => {
  el.addEventListener("click", closeBooking);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeBooking();
});

document.querySelectorAll("[data-service]").forEach(btn => {
  btn.addEventListener("click", () => openBooking(btn.dataset.service));
});

bookingForm.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(bookingForm);
  const message = [
    "Hello Bali Serenity Spa, I would like to make a booking.",
    "",
    `Name: ${data.get("name")}`,
    `WhatsApp: ${data.get("phone")}`,
    `Email: ${data.get("email") || "-"}`,
    `Treatment: ${data.get("treatment")}`,
    `Date: ${data.get("date")}`,
    `Time: ${data.get("time")}`,
    `Guests: ${data.get("guests")}`,
    `Special Request: ${data.get("request") || "-"}`
  ].join("\n");

  const whatsappNumber = "6281234567890";
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  closeBooking();
});

backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const testimonials = [
  {
    text: "An amazing spa experience in Bali! The massage was superb, and the ambiance was so peaceful. Highly recommended!",
    name: "Sarah Mitchell",
    country: "Australia",
    initials: "SM"
  },
  {
    text: "Beautiful atmosphere, very professional therapist, and one of the most relaxing treatments we had in Bali.",
    name: "Daniel Carter",
    country: "United Kingdom",
    initials: "DC"
  },
  {
    text: "The couple treatment was wonderful. Everything felt thoughtful, calm and genuinely premium from start to finish.",
    name: "Emma Laurent",
    country: "France",
    initials: "EL"
  }
];

let testimonialIndex = 0;
const textEl = document.getElementById("testimonialText");
const nameEl = document.getElementById("testimonialName");
const countryEl = document.getElementById("testimonialCountry");
const avatarEl = document.querySelector(".avatar");
const dotsEl = document.getElementById("sliderDots");

function renderDots() {
  dotsEl.innerHTML = testimonials.map((_, i) =>
    `<button class="${i === testimonialIndex ? "active" : ""}" aria-label="Go to testimonial ${i + 1}" data-index="${i}"></button>`
  ).join("");
  dotsEl.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      testimonialIndex = Number(btn.dataset.index);
      renderTestimonial();
    });
  });
}

function renderTestimonial() {
  const item = testimonials[testimonialIndex];
  textEl.textContent = item.text;
  nameEl.textContent = item.name;
  countryEl.textContent = item.country;
  avatarEl.textContent = item.initials;
  renderDots();
}

document.getElementById("prevTestimonial").addEventListener("click", () => {
  testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial();
});

document.getElementById("nextTestimonial").addEventListener("click", () => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  renderTestimonial();
});

renderTestimonial();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const dateInput = document.querySelector('input[name="date"]');
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
dateInput.min = `${yyyy}-${mm}-${dd}`;
