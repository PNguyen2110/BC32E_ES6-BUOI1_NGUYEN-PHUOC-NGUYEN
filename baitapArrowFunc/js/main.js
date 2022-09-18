const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
/// render color
const renderColor = () => {
  var html = "";

  for (let value of colorList) {
    html += `<button class='color-button ${value}'></button>`;
  }
  document.querySelector("#colorContainer").innerHTML = html;
};

renderColor();

// selectColor
const selectColor = () => {
  const colorButton = document.querySelectorAll(".color-button");
  document.querySelector(".color-button:nth-child(1)").classList.add("active");

  colorButton.forEach((item) => {
    item.onclick = () => {
      document.querySelector(".active").classList.remove("active");

      const getClass = item.getAttribute("class");
      const arr = getClass.split(" ");
      const color = arr[1];

      document.querySelector(".house").setAttribute("class", `house ${color}`);
      item.classList.add("active");
    };
  });
};

selectColor();
