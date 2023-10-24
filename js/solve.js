(() => {
  function towerOfHanoi(operations, n, source, auxiliary, target) {
    if (n === 1) {
      operations.push(source);
      operations.push(target);
      return;
    }

    towerOfHanoi(operations, n - 1, source, target, auxiliary);
    operations.push(source);
    operations.push(target);
    towerOfHanoi(operations, n - 1, auxiliary, source, target);
  }

  function solve(operations, progress, n) {
    if (operations[n] != null) {
      document.getElementById(operations[n]).click();
      progress.setAttribute("value", n);
      console.log("click", operations[n]);
      setTimeout(() => {
        solve(operations, progress, n + 1);
      }, 250);
    } else {
      progress.classList.add("hidden");
      console.log("finished!");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("change-disks").addEventListener("change", () => {
      document.getElementById("solve").setAttribute("disabled", true);
    });

    document.getElementById("change").addEventListener("click", () => {
      document.getElementById("solve").removeAttribute("disabled");
    });

    document.getElementById("solve").addEventListener("click", (event) => {
      event.target.setAttribute("disabled", true);

      const changeDisks = document.getElementById("change-disks");
      const progress = document.getElementById("progress");
      progress.classList.remove("hidden");
      // Example usage:
      const operations = [];
      const n = parseInt(changeDisks.value); // Number of disks
      const sourcePeg = "button-a";
      const auxiliaryPeg = "button-b";
      const targetPeg = "button-c";

      towerOfHanoi(operations, n, sourcePeg, auxiliaryPeg, targetPeg);

      // Start the countdown from 10 seconds
      progress.setAttribute("max", operations.length);
      solve(operations, progress, 0);
    });
  });
})();
