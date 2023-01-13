const button = document.querySelectorAll(".btn");

for (let i = 0; i < button.length; i++) {
  const buttonBlue = button[i];

  button[i].addEventListener("mouseover", (event) => {
    button[i].style.backgroundColor = "#5a60fd";
    button[i].style.width = "300px";
  });
  button[i].addEventListener("mouseout", (event) => {
    button[i].style.backgroundColor = "";
    button[i].style.width = "";
  });
}
