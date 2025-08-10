function sendEmail(event) {
  event.preventDefault();

  const form = document.querySelector('.form');

  function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
  // First: send message to YOU (Saif)
  emailjs.sendForm('service_4jj8hze', 'template_r2bby94', form, '06OudCEVi3QmCAaE5')
    .then(() => {
      console.log("✅ Sent to Saif");
    }, (error) => {
      console.error("❌ Failed to send to Saif:", error);
    });

  // Second: auto-reply to USER
  emailjs.sendForm('service_4jj8hze', 'template_w87fh62', form, '06OudCEVi3QmCAaE5')
    .then(() => {
      showToast("✅ Message sent!");
      form.reset();
    }, (error) => {
      console.error("❌ Auto-reply failed:", error);
      showToast("❌ Failed to send. Try again.");
    });
}

function showResumeToast() {
  const toast = document.getElementById("resumeToast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ====== POPUP PROJECT DETAILS ======

const projectDescriptions = {
  project1: {
    title: "SkillNest (EdTech Platform)",
    desc: "SkillNest is a comprehensive full-stack EdTech platform that allows instructors to create, organize, and monetize courses, while students can explore, enroll, and track their learning. It includes role-based authentication (admin, student, instructor), Cloudinary integration for media uploads, OTP-based registration, and a secure payment gateway. Interactive dashboards show revenue, progress, and reviews. Built with MERN stack and TailwindCSS, the platform ensures responsive design and seamless user experience across devices for personalized education management."
  },
  project2: {
    title: "Ecomzy (E-Commerce App)",
    desc: "Ecomzy is a modern e-commerce web app built using React, Redux Toolkit, and Vite for blazing-fast performance. It offers features like add/remove from cart, dynamic product listing, and a seamless checkout process. State management is handled through Redux for scalability, and TailwindCSS ensures a clean, responsive UI. The app uses React Router for page navigation and JavaScript array methods for rendering product and cart data in real-time. Designed to provide a smooth shopping experience across all screen sizes."
  },
  project3: {
    title: "Weather Now",
    desc: "Weather Now is a real-time weather forecasting app that uses the OpenWeatherMap API to fetch current temperature, humidity, wind speed, and cloud data. It detects the user’s location using the Geolocation API and also supports manual city/country search. The app uses the Fetch API with async/await for smooth data handling and includes error validation for invalid inputs or API issues. Built with HTML, TailwindCSS, and vanilla JavaScript, it provides a responsive and intuitive user experience."
  },
  project4: {
    title: "Granit (Architectural Site)",
    desc: "Granit is a modern architecture planning website built for Hebrew-speaking users. It allows users to explore building plans and services interactively. Designed with HTML, CSS, TailwindCSS, and JavaScript, it emphasizes clean design, ease of navigation, and mobile responsiveness tailored to local language needs."
  },
};

function setupProjectPopups() {
  const readMoreButtons = document.querySelectorAll(".btn-project");

  readMoreButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const projectId = "project" + (index + 1);
      const project = projectDescriptions[projectId];
      document.getElementById("popupTitle").textContent = project.title;
      document.getElementById("popupDescription").textContent = project.desc;
      document.getElementById("projectPopup").classList.remove("hidden");
    });
  });
}

function closePopup() {
  document.getElementById("projectPopup").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('.form');
  if (form) form.addEventListener('submit', sendEmail);

  setupProjectPopups(); 
});
