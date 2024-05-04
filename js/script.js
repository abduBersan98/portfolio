document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav_link");

  navLinks.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.forEach((item) => {
        item.classList.remove("active-link");
      });
      this.classList.add("active-link");
    });
  });

  window.document.addEventListener("scroll", onScroll);

  mouseCursor();
  backToTopButton();
});

function onScroll(event) {
  var sections = document.querySelectorAll(".section");
  var scrollPos =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  var currentSection = null;
  // console.log("--------------------");
  // console.log("*******************");
  // console.log("Scroll Position:", scrollPos);

  // Détecter la section actuelle
  sections.forEach((section) => {
    // console.log(
    //   "Section:",
    //   section.id,
    //   ", Start:",
    //   section.offsetTop,
    //   ", End:",
    //   section.offsetTop + section.offsetHeight
    // );

    // si scrollPos est plus proche du haut de la section que de la section suivante
    // alors on considère que c'est la section actuelle
    if (
      scrollPos >= section.offsetTop - section.offsetHeight / 2 &&
      scrollPos < section.offsetTop + section.offsetHeight / 2
    ) {
      currentSection = section;
    }

    // if (
    //   section.offsetTop <= scrollPos &&
    //   section.offsetTop + section.offsetHeight > scrollPos
    // ) {
    //   currentSection = section;
    // }


  });

  // console.log("Current Section:", currentSection?.id);

  // Mise à jour des liens
  document.querySelectorAll(".nav_link").forEach((link) => {
    // Enlever la classe active de tous les liens
    link.classList.remove("active-link");
    // Ajouter la classe active si l'ID de la section correspond à l'ancre du lien
    if (
      currentSection &&
      currentSection.getAttribute("id") ===
        link.getAttribute("href").substring(1)
    ) {
      link.classList.add("active-link");
    }
  });
}

function mouseCursor() {
  // options = {
  //   outerStyle: "circle-basic",
  //   hoverEffect: "pointer-blur",
  //   hoverItemMove: false,
  //   defaultCursor: false,
  //   outerWidth: 41,
  //   outerHeight: 41,
  // };
  options = {
    outerStyle: "disable",
    hoverEffect: "pointer-overlay",
    hoverItemMove: false,
    defaultCursor: false,
    outerWidth: 30,
    outerHeight: 30,
  };
  magicMouse(options);
}

function backToTopButton() {
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";

  var updateProgress = function () {
    var scroll = window.scrollY;
    var height = document.documentElement.scrollHeight - window.innerHeight;
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress);

  var offset = 50;
  var duration = 550;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > offset) {
      document.querySelector(".progress-wrap").classList.add("active-progress");
    } else {
      document
        .querySelector(".progress-wrap")
        .classList.remove("active-progress");
    }
  });

  document
    .querySelector(".progress-wrap")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return false;
    });
}
