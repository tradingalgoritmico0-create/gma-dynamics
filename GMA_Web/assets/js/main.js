const ready = () => {
  if (window.AOS && typeof window.AOS.init === "function") {
    window.AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
