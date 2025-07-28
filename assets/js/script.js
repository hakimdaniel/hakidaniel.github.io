
const scrollTopBtn = document.getElementById("btnScrollTop");

// Tunjuk/sembunyi butang ikut scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.remove("d-none");
  } else {
    scrollTopBtn.classList.add("d-none");
  }
});

// Bila butang diklik
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});