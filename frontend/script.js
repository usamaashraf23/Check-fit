$(document).ready(function () {

    $.ajax({
        url: "https://numbersapi.com/1/30/date",
        dataType: "jsonp",   // JSONP handles CORS
        success: function (response) {
            $("#numberFactText").text(response.text);
            $("#numberFactMeta").text(
                "Year: " + response.year + " | Type: " + response.type
            );
        },
        error: function () {
            $("#numberFactText").text("Failed to load fitness fact.");
        }
    });

});


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

document.getElementById("uploadForm").addEventListener("submit", function(e) {
    // e.preventDefault();

    const formData = new FormData(this);

    fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
    })
    .catch(err => console.log(err));

    // document.getElementById("fitnessImage").value = "";
});