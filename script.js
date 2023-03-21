var typed = new Typed(".multiple-text", {
  strings: ["MERN Stack Developer", "Chatbot Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.getElementById("bars").addEventListener("click", () => {
  document.getElementById("bars").classList.toggle("fa-times");
  document.getElementById("bars").classList.toggle("fa-bars");

  if (document.getElementById("bars").className === "fa fa-bars") {
    document.getElementById("navbar").className = "hide";
  } else {
    document.getElementById("navbar").className = "show";
  }
});

(() => {
  var year = new Date().getFullYear();
  document.getElementById("year").innerHTML = year;
})();

function launch_url(url) {
  window.open(url, "_blank");
}

// Scroll to top button
const scrollButton = document.getElementById("scroll-to-top");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}
