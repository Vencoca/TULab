a = document.getElementById("arrow")
a.addEventListener("click", e => {
    let element = document.querySelector(a.getAttribute("href"));
    let linkST = ScrollTrigger.create({
                    trigger: element,
                    start: "top 81px"
                  });
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
  });