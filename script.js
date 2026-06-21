const form = document.querySelector("#contactForm");
const year = document.querySelector("#year");
const videoLoader = document.querySelector("[data-youtube-src]");
const videoFrame = document.querySelector("[data-youtube-video]");
const defaultEmail = "gepner100@gmail.com";

if (year) {
  year.textContent = new Date().getFullYear();
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = "פניה דיסקרטית מהאתר";
    const body = [
      "שלום יוסי, אשמח שתחזור אליי בדיסקרטיות.",
      name ? `שם: ${name}` : "",
      phone ? `טלפון: ${phone}` : "",
      message ? `הודעה: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${defaultEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

if (videoLoader && videoFrame) {
  videoLoader.addEventListener("click", () => {
    const iframe = videoFrame.querySelector("iframe");
    const src = videoLoader.getAttribute("data-youtube-src");
    const youtubeUrl = videoLoader.getAttribute("data-youtube-url");

    if (window.location.protocol === "file:" && youtubeUrl) {
      window.open(youtubeUrl, "_blank", "noopener");
      return;
    }

    if (iframe && src) {
      const separator = src.includes("?") ? "&" : "?";
      const origin = window.location.origin && window.location.origin !== "null"
        ? `${separator}origin=${encodeURIComponent(window.location.origin)}`
        : "";

      iframe.src = `${src}${origin}`;
      videoFrame.classList.add("is-loaded");
    }
  });
}
document.querySelector('.contact-form')
  .addEventListener('submit', function () {
    setTimeout(() => {
      document.getElementById('successMessage').style.display = 'block';
    }, 1000);
  });
