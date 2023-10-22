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

  function solve(operations, n) {
    if (operations[n] != null) {
      document.getElementById(operations[n]).click();
      console.log("click", operations[n]);
      setTimeout(() => {
        solve(operations, n + 1);
      }, 250);
    } else {
      console.log("finished!");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("solve").addEventListener("click", (event) => {
      event.target.setAttribute("disabled", true);

      // Example usage:
      const operations = [];
      const n = 8; // Number of disks
      const sourcePeg = "button-a";
      const auxiliaryPeg = "button-b";
      const targetPeg = "button-c";

      towerOfHanoi(operations, n, sourcePeg, auxiliaryPeg, targetPeg);

      // Start the countdown from 10 seconds
      console.log(operations.length);
      solve(operations, 0);
    });
  });
})();
