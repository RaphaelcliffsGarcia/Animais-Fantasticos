function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}
initTabNav();
function initAccordion() {
  function activeAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const topo = section.offsetTop;
  window.scrollTo({
    top: topo,
    behavior: "smooth",
  });
}
const linksInternos = document.querySelectorAll('js-menu a[href^="#"]');

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
function initAnimacaoScroll() {
  const section = document.querySelectorAll(".js-scroll");
  if (section.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      section.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisivle = sectionTop - windowMetade < 0;
        if (isSectionVisivle) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
