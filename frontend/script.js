const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {
    let count = 0;

    const countEl = card.querySelector(".count");
    const incrementBtn = card.querySelector(".increment");
    const decrementBtn = card.querySelector(".decrement");

    incrementBtn.addEventListener("click", () => {
        count++;
        countEl.textContent = count;
    });

    decrementBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            countEl.textContent = count;
        }
    });
});
