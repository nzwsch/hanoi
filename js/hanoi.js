(() => {
  class Hanoi {
    totalMoves = 0;
    onFirstMove = () => {};

    constructor() {
      this.hanoi = document.getElementById("hanoi");
      this.counter = document.getElementById("counter");
      this.buttons = this.hanoi.querySelectorAll(".buttons > button");
    }

    setup() {
      this.hanoi.querySelectorAll(".disk").forEach((disk, index) => {
        disk.setAttribute("data-index", index);
      });

      const buttonA = document.getElementById("button-a");
      const buttonB = document.getElementById("button-b");
      const buttonC = document.getElementById("button-c");

      this.setupButton(buttonA, "peg-a");
      this.setupButton(buttonB, "peg-b");
      this.setupButton(buttonC, "peg-c");

      buttonA.removeAttribute("disabled");
    }

    setupButton(button, dataId) {
      button.setAttribute("disabled", true);
      button.setAttribute("data-id", dataId);
      button.addEventListener("click", (event) => this.clickHandler(event));
    }

    clickHandler(event) {
      const button = event.target;
      const peg = document.getElementById(button.dataset.id);
      const isCanceled = button.classList.contains("selected");
      const isNotSelected = Array.from(this.buttons).every(
        (button) => !button.classList.contains("selected")
      );

      if (isCanceled) {
        button.classList.remove("selected");
        peg.classList.remove("selected");
        this.disableButtonsIfPegIsEmpty();
      } else if (isNotSelected) {
        button.classList.add("selected");
        peg.classList.add("selected");
        this.disableButtonsIfPegCantMove(peg);
      } else {
        if (this.totalMoves === 0) {
          this.onFirstMove();
        }
        this.updateCounter();
        this.moveDiskFromSelectedToClicked(peg);
        this.buttons.forEach((button) => button.classList.remove("selected"));
        this.disableButtonsIfPegIsEmpty();
      }
    }

    disableButtonsIfPegIsEmpty() {
      this.buttons.forEach((button) => {
        const peg = document.getElementById(button.dataset.id);

        if (peg.children.length === 0) {
          button.setAttribute("disabled", true);
        } else {
          button.removeAttribute("disabled");
        }
      });
    }

    disableButtonsIfPegCantMove(selectedPeg) {
      this.buttons.forEach((button) => {
        if (button.classList.contains("selected")) {
          return;
        }

        const peg = document.getElementById(button.dataset.id);

        if (peg.children.length === 0) {
          button.removeAttribute("disabled");
          return;
        }

        const diskA = selectedPeg.querySelector(".disk:first-child");
        const diskB = peg.querySelector(".disk:first-child");

        if (parseInt(diskA.dataset.index) > parseInt(diskB.dataset.index)) {
          button.setAttribute("disabled", true);
        } else {
          button.removeAttribute("disabled");
        }
      });
    }

    updateCounter() {
      this.totalMoves += 1;
      this.counter.innerText = `${this.totalMoves} steps`;
    }

    moveDiskFromSelectedToClicked(clickedPeg) {
      const selected = this.hanoi.querySelector(".buttons .selected");
      const selectedPeg = document.getElementById(selected.dataset.id);
      const disk = selectedPeg.querySelector(".disk:first-child");

      clickedPeg.prepend(disk);
      selectedPeg.classList.remove("selected");
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    const hanoi = new Hanoi();
    hanoi.onFirstMove = () => {
      document.getElementById("solve").setAttribute("disabled", true);
    };
    hanoi.setup();
  });
})();
