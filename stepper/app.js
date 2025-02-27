const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.querySelector(".progress-bar");
let stepBlocks = document.querySelectorAll(".step-number");
let actionMessage = document.querySelector(".action-message");

let messages = {
  1: "Add contact details for further communications.",
  2: "Add shipping address for successful delivery.",
  3: "Complete Payment to complete the order.",
  4: "Ready to get delivered!",
  5: "Order Delivered successfully!🎉",
};

let step = 1;
let newWidth = 0;

let updateProgress = {
  increment: () => {
    if (step > 4) return;

    newWidth = Math.min(100, ((step / 3) * 100).toFixed(3));

    stepBlocks[step - 1].innerHTML = "✓";
    stepBlocks[step - 1].classList.add("completed");

    if (step < 4) {
      stepBlocks[step].classList.add("active");
    }

    if (step === 3) nextBtn.innerText = "Finish"; // Fixed
    actionMessage.innerText = messages[step + 1];

    step++;
    progressBar.style.width = `${newWidth}%`;

    nextBtn.disabled = step > 4;
    previousBtn.disabled = step <= 1; // Fixed
  },
  decrement: () => {
    if (step <= 1) return;

    step--;

    newWidth = Math.max(0, (((step - 1) / 3) * 100).toFixed(3));
    progressBar.style.width = `${newWidth}%`;

    stepBlocks[step - 1].innerHTML = step; // Fixed
    stepBlocks[step - 1].classList.remove("completed");

    if (step < 4) {
      stepBlocks[step].classList.remove("active");
      nextBtn.innerText = "Next"; // Fixed
    }

    actionMessage.innerText = messages[step];

    nextBtn.disabled = false;
    previousBtn.disabled = step <= 1; // Fixed
  },
};

nextBtn.addEventListener("click", updateProgress.increment);
previousBtn.addEventListener("click", updateProgress.decrement);
