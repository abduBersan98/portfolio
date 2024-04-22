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
});

function onScroll(event) {
  var sections = document.querySelectorAll(".section");
  var scrollPos =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  var currentSection = null;
  //   console.log("--------------------");
  //   console.log("*******************");
  //   console.log("Scroll Position:", scrollPos);

  // Détecter la section actuelle
  sections.forEach((section) => {
    // console.log(
    //   "Section:",
    //   section.id,
    //   "Start:",
    //   section.offsetTop,
    //   "End:",
    //   section.offsetTop + section.offsetHeight
    // );

    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      currentSection = section;
    }
  });

  //   console.log("currentSection:", currentSection.getAttribute("id"));

  // Mise à jour des liens
  document.querySelectorAll(".nav_link").forEach((link) => {
    link.classList.remove("active-link"); // Enlever la classe active de tous les liens
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