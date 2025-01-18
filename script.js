let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    if (value === "=") {
      try {
        string = eval(string); // Evaluate the expression
        input.value = string;
      } catch {
        input.value = "Error"; // Handle invalid expressions
        string = "";
      }
    } else if (value === "AC") {
      string = ""; // Clear all input
      input.value = "0";
    } else if (value === "DEL") {
      string = string.slice(0, -1); // Remove the last character
      input.value = string || "0"; // Show 0 if empty
    } else {
      string += value; // Append the button value
      input.value = string;
    }
  });
});
