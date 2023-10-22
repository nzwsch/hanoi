const clickButton = (pegId) => {
  const buttons = document.querySelectorAll("#hanoi button");
  // const peg = document.getElementById(pegId);

  return (event) => {
    const clicked = event.target;
    const isNotSelected = Array.from(buttons).every(
      (btn) => btn.className === ""
    );

    if (isNotSelected) {
      Array.from(buttons).forEach((button) => {
        if (clicked === button) {
          button.className = "selected";
        } else {
          button.disabled = false;
        }
      });
    } else {
      Array.from(buttons).forEach((button) => {
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

document.getElementById("button-b").setAttribute("disabled", true);
document.getElementById("button-c").setAttribute("disabled", true);

document
  .getElementById("button-a")
  .addEventListener("click", clickButton("peg-a"));
document
  .getElementById("button-b")
  .addEventListener("click", clickButton("peg-b"));
document
  .getElementById("button-c")
  .addEventListener("click", clickButton("peg-c"));
