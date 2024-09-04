// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // gsap code here!
  gsap.to(".banner-img", {
    "--width": "0",
    duration: 0.8,
    delay: 0.3,
    ease: "power3.inOut",
  });

  gsap.to(".animation-to-right", {
    scrollTrigger: {
      trigger: ".intro",
      start: "top 80%",
      end: "top 60% ",
      scrub: 1,
    },
    "--width": "0",
  });

  document.querySelectorAll(".animation-fadeup").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: () => `+=${el.offsetHeight}px`,
        scrub: 1,
      },
      opacity: 0,
      y: 20,
    });
  });
});
