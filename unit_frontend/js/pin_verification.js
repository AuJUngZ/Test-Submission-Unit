document.addEventListener("DOMContentLoaded", function () {
  const numButtons = document.querySelectorAll(".num-button");
  const dots = document.querySelectorAll(".dot");
  const deleteButton = document.querySelector(".delete-button");
  const backButton = document.querySelector(".back-button");

  let enteredPin = "";

  const currentTel = sessionStorage.getItem("currentTel");

  if (!currentTel || !mapOfTelAndPin.has(currentTel)) {
    window.location.href = "./index.html";
    return;
  }

  const correctPin = mapOfTelAndPin.get(currentTel);

  function updateDots() {
    dots.forEach((dot, index) => {
      if (index < enteredPin.length) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function verifyPin() {
    if (enteredPin === correctPin) {
      window.location.href = "./sort.html";
    } else {
      dots.forEach((dot) => {
        dot.style.backgroundColor = "#ff0000";
        setTimeout(() => {
          dot.style.backgroundColor = "";
          dot.classList.remove("active");
        }, 500);
      });

      enteredPin = "";
      updateDots();
    }
  }

  numButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (enteredPin.length < 6) {
        const num = button.getAttribute("data-num");
        enteredPin += num;
        updateDots();

        if (enteredPin.length === 6) {
          setTimeout(verifyPin, 300);
        }
      }
    });
  });

  deleteButton.addEventListener("click", () => {
    if (enteredPin.length > 0) {
      enteredPin = enteredPin.slice(0, -1);
      updateDots();
    }
  });

  backButton.addEventListener("click", function () {
    window.location.href = "./index.html";
  });

  updateDots();
});
