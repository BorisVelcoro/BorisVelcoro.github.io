const $backButton = document.getElementById("button-back");
const $nextButton = document.getElementById("button-next");
const $firstForm = document.getElementById("form-first");
const $secondForm = document.getElementById("form-second");
const $thirdForm = document.getElementById("form-third");

let stepState = 0;

$backButton.addEventListener("click", () => {
  goBack(stepState);
});

$nextButton.addEventListener("click", () => {
  goToNextForm(stepState);
});

function goToNextForm(step) {
  if (step === 0) {
    $firstForm.classList.remove("active");
    $firstForm.classList.add("hidden");
    $secondForm.classList.remove("hidden");
    $secondForm.classList.add("active");
    stepState = 1;
  } else if (step === 1) {
    $secondForm.classList.remove("active");
    $secondForm.classList.add("hidden");
    $thirdForm.classList.remove("hidden");
    $thirdForm.classList.add("active");
    stepState = 2;
  } else {
    alert("modal window opens here");
  }
}

function goBack(step) {
  if (step === 0) {
    window.location.href = "../main/index.html";
  } else if (step === 1) {
    $secondForm.classList.remove("active");
    $secondForm.classList.add("hidden");
    $firstForm.classList.remove("hidden");
    $firstForm.classList.add("active");
    stepState = 0;
  } else {
    $thirdForm.classList.remove("active");
    $thirdForm.classList.add("hidden");
    $secondForm.classList.remove("hidden");
    $secondForm.classList.add("active");
    stepState = 1;
  }
}
