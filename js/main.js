const navToggle = document.querySelector(".nav-toggle");
const navActions = document.querySelector(".nav-actions");

navToggle.addEventListener("click", () => {
  navActions.classList.toggle("active");
});



// SERVICE MODAL 
const modalOverlay = document.getElementById("serviceModal");
const modalTitle = modalOverlay.querySelector(".modal-title");
const modalContent = modalOverlay.querySelector(".modal-content");
const closeBtn = modalOverlay.querySelector(".modal-close");

const serviceDetails = {
  frontend: {
    title: "Frontend Development",
    content: `
      <ul>
        <li>Semantic, accessible HTML structure</li>
        <li>Scalable CSS using modern layout techniques</li>
        <li>Vanilla JavaScript for interactions</li>
        <li>Component-based UI thinking</li>
        <li>Cross-browser compatible interfaces</li>
      
      </ul>
    `,
  },
  responsive: {
    title: "Responsive Web Design",
    content: `
      <ul>
        <li>Mobile-first layout approach</li>
        <li>Flexible grids and fluid typography</li>
        <li>Cross-device and cross-browser testing</li>
      </ul>
    `,
  },
  figma: {
    title: "UI/UX Design to Code",
    content: `
      <ul>
        <li>Figma → HTML/CSS conversion</li>
        <li>Organized and scalable code structure</li>
        <li>Optimized images & assets</li>
        <li>Web typography, spacing, and visual consistency</li>
        <li>EO-friendly HTML structure</li>
      </ul>
    `,
  },
};

document.querySelectorAll(".service-link").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.service;
    modalTitle.textContent = serviceDetails[key].title;
    modalContent.innerHTML = serviceDetails[key].content;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});



//CONTACT SECTION
const contactForm = document.getElementById("contactForm");
const successMessage = document.querySelector(".form-success");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  successMessage.style.display = "flex";
  contactForm.reset();

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 4000);
});





//scroll reveal
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => observer.observe(el));
