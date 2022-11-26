import gsap from 'gsap';

// OPEN MENU
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 1.2,
    height: 0,
    transformOrigin: 'right top',
    ease: 'power3.inOut',
    stagger: {
      amount: 0.1,
    },
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.07,
    },
  });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (arr) => {
  gsap.from([...arr], {
    duration: 0.8,
    y: 100,
    delay: 0.3,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.3,
    },
  });
};

// Fade up for the additonal info on our menu
export const fadeInUp = (node) => {
  gsap.from(node, {
    y: 100,
    duration: 1,
    delay: 0.2,
    opacity: 0,
  });
};

// Hover on the link
export const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: 'power1.inOut',
  });
};

// Hover off the link
export const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: 'power1.inOut',
  });
};
