let links = gsap.utils.toArray("nav a");

links.forEach(a => {
    let element = document.querySelector(a.getAttribute("href"));
    let linkST = ScrollTrigger.create({
                    trigger: element,
                    start: "top 80px"
                  });
    ScrollTrigger.create({
        trigger: element,
        start: "top 81px",
        end: "bottom 81px",
        onToggle: self => self.isActive && setActive(a)
    });
    a.addEventListener("click", e => {
      e.preventDefault();
      if (document.getElementById("menu-btn").checked){
        document.getElementById("menu-btn").click();
      }
      gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
    });
});
/*
let links = gsap.utils.toArray("nav a");
links.forEach(a => {
  let element = document.querySelector(a.getAttribute("href")),
      linkST = ScrollTrigger.create({
            trigger: element,
            start: "top top"
          });
  ScrollTrigger.create({
    trigger: element,
    start: "top center",
    end: "bottom center",
    onToggle: self => self.isActive && setActive(a)
  });
  a.addEventListener("click", e => {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
  });
});
*/
function setActive(link) {
    links.forEach(el => el.classList.remove("active"));
    link.classList.add("active");
}