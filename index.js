const boxes = document.querySelectorAll(".box");
        const radios = document.querySelectorAll("input[type='radio']");
        const totalBox = document.querySelector(".total-box");

        boxes.forEach((box, index) => {
            box.addEventListener("click", () => {
                // Reset all boxes
                boxes.forEach(b => {
                    b.classList.remove("selected", "expanded");
                });

                // Expand and select current box
                box.classList.add("selected", "expanded");
                radios[index].checked = true;

                // Update total price
                let price = box.getAttribute("data-price");
                totalBox.textContent = `Total Price: $${price} USD`;
            });
        });