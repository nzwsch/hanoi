(() => {
  const disableButtonsIfPegIsEmpty = (buttons) => {
    buttons.forEach((button) => {
      const peg = document.getElementById(button.dataset.target);

      if (peg.children.length === 0) {
        button.setAttribute("disabled", true);
      } else {
        button.removeAttribute("disabled");
      }
    });
  };

  const clickButton = (pegId) => {
    const hanoi = document.getElementById("hanoi");
    const buttons = hanoi.querySelectorAll("button");
    const peg = document.getElementById(pegId);

    return (event) => {
      const clicked = event.target;
      const isCanceled = clicked.classList.contains("selected");

      // do nothing..
      if (isCanceled) {
        clicked.className = "";
        peg.classList.remove("selected");
        disableButtonsIfPegIsEmpty(buttons);
        return;
      }

      const isNotSelected = Array.from(buttons).every(
        (btn) => btn.className === ""
      );

      if (isNotSelected) {
        buttons.forEach((button) => {
          if (clicked === button) {
            button.className = "selected";
            peg.classList.add("selected");
          } else {
            button.disabled = false;
          }
        });
      } else {
        buttons.forEach((button) => {
          if (clicked === button) {
            button.className = "";
            // check each peg and when empty peg then it should be disabled
          } else {
            button.className = "";
            // move disk peg to peg
            // check each peg and when empty peg then it should be disabled
          }
        });
      }
    };
  };

  document.addEventListener("DOMContentLoaded", () => {
    const buttonA = document.getElementById("button-a");
    const buttonB = document.getElementById("button-b");
    const buttonC = document.getElementById("button-c");

    buttonA.removeAttribute("disabled");
    buttonB.setAttribute("disabled", true);
    buttonC.setAttribute("disabled", true);

    buttonA.setAttribute("data-target", "peg-a");
    buttonB.setAttribute("data-target", "peg-b");
    buttonC.setAttribute("data-target", "peg-c");

    buttonA.addEventListener("click", clickButton("peg-a"));
    buttonB.addEventListener("click", clickButton("peg-b"));
    buttonC.addEventListener("click", clickButton("peg-c"));
  });
})();
