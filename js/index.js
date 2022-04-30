const stars = document.querySelectorAll(".fa-star");

const emojis = document.querySelectorAll(".far");

// Valoration in stars
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    //    console.log('clicked', index);
    updateRating(index);
  });
});

const updateRating = (index) => {
  stars.forEach((star, idx) => {
    if (idx < index + 1) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
  emojis.forEach((emoji) => {
    emoji.style.transform = `translateX(-${50 * index}px)`;
  });
};
