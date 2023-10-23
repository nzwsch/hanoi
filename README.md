### how to solve tower of hanoi?

Solving the Tower of Hanoi problem in JavaScript involves creating a recursive function to move a stack of disks from one peg to another while adhering to the rules of the puzzle. The Tower of Hanoi consists of three pegs and a set of disks of different sizes. The goal is to move all the disks from the first peg to the third peg, using the second peg as an auxiliary.

Here's a JavaScript implementation of the Tower of Hanoi problem:

```javascript
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
const n = 3; // Number of disks
const sourcePeg = "A";
const auxiliaryPeg = "B";
const targetPeg = "C";

towerOfHanoi(n, sourcePeg, auxiliaryPeg, targetPeg);
```

In this code, the `towerOfHanoi` function is called recursively. It follows the following steps:

1. If there's only one disk (n === 1), it simply moves the top disk from the source peg to the target peg and prints the move.
2. Otherwise, it follows a recursive strategy:
   - Move the top n-1 disks from the source peg to the auxiliary peg using the target peg as the auxiliary.
   - Move the largest disk (disk n) from the source peg to the target peg.
   - Move the n-1 disks from the auxiliary peg to the target peg using the source peg as the auxiliary.

You can change the values of `n`, `sourcePeg`, `auxiliaryPeg`, and `targetPeg` to solve the Tower of Hanoi problem for different numbers of disks and peg configurations.

When you run the code, it will print a series of instructions for moving the disks from the source peg to the target peg while adhering to the rules of the Tower of Hanoi puzzle.
