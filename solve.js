function towerOfHanoi(n, source, auxiliary, target) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${target}`);
    return;
  }

  towerOfHanoi(n - 1, source, target, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${target}`);
  towerOfHanoi(n - 1, auxiliary, source, target);
}

// Example usage:
const n = 7; // Number of disks
const sourcePeg = "A";
const auxiliaryPeg = "B";
const targetPeg = "C";

towerOfHanoi(n, sourcePeg, auxiliaryPeg, targetPeg);
