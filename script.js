let position = document.documentElement;
position.addEventListener('mousemove', e => {
    position.style.setProperty('--x', e.clientX + 'px')
    position.style.setProperty('--y', e.clientY + 'px')
})

// SCROLL FASHION
document.querySelector(".card_img").addEventListener("click", function() {
    const cardBody = document.querySelector(".card_body");
    cardBody.classList.toggle("active");
  });
  
  