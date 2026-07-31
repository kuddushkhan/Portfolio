document.addEventListener("DOMContentLoaded", () => {

  const transition = document.querySelector(".page-transition");

  /* Page entrance */
  if (transition) {
    transition.classList.add("page-enter");

    setTimeout(() => {
      transition.classList.remove("page-enter");
    }, 50);
  }


  /* Page navigation */
  const pageLinks = document.querySelectorAll(
    ".project-link, .about-link, .service-link, .technologies-link, .back-btn, .secondary-btn"
  );


  pageLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const href = link.getAttribute("href");

      /* Ignore same-page anchors */
      if (!href || href.startsWith("#")) {
        return;
      }

      event.preventDefault();

      const destination = link.href;

      document.body.classList.add("page-exit");

      setTimeout(() => {
        window.location.href = destination;
      }, 850);

    });

  });

});