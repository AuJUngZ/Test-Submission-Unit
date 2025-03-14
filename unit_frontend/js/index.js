document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const telInput = document.getElementById("tel");
  const errorMessage = document.createElement("div");
  errorMessage.className = "error-message";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    telInput.parentNode.appendChild(errorMessage);

    const tel = telInput.value.trim();

    if (tel.length !== 10) {
      showError("กรุณากรอกหมายเลขโทรศัพท์ให้ครบ 10 หลัก");
      return;
    }

    if (!mapOfTelAndPin.has(tel)) {
      showError("เบอร์โทรศัพท์ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
      return;
    }

    sessionStorage.setItem("currentTel", tel);
    window.location.href = "./pin_verification.html";
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    telInput.classList.add("error");
  }

  telInput.addEventListener("input", function () {
    telInput.classList.remove("error");
    errorMessage.style.display = "none";
  });
});
