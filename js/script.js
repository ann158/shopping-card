document.addEventListener("DOMContentLoaded", function () {
    // Select total price element
    const totalPriceElement = document.querySelector(".total");

    // Function to update the total price
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll(".card").forEach((item) => {
            const quantity = parseInt(item.querySelector(".quantity").textContent);
            const unitPrice = parseFloat(item.querySelector(".unit-price").textContent.replace("$", ""));
            total += quantity * unitPrice;
        });
        totalPriceElement.textContent = `${total} $`;
    }

    // Select all product cards
    document.querySelectorAll(".card").forEach((item) => {
        const plusBtn = item.querySelector(".fa-plus-circle");
        const minusBtn = item.querySelector(".fa-minus-circle");
        const quantitySpan = item.querySelector(".quantity");
        const deleteBtn = item.querySelector(".fa-trash-alt");
        const likeBtn = item.querySelector(".fa-heart");

        // Increase quantity
        plusBtn.addEventListener("click", () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantitySpan.textContent = quantity + 1;
            updateTotalPrice();
        });

        // Decrease quantity (min 0)
        minusBtn.addEventListener("click", () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                quantitySpan.textContent = quantity - 1;
                updateTotalPrice();
            }
        });

        // Delete item from cart
        deleteBtn.addEventListener("click", () => {
            item.parentElement.parentElement.remove();
            updateTotalPrice();
        });

        // Like button toggle
        likeBtn.addEventListener("click", () => {
            likeBtn.classList.toggle("liked");
        });
    });

    // Initial total price calculation
    updateTotalPrice();
});

console.log('i am alive');