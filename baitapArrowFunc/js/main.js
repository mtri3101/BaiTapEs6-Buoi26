let colorList = [
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

let renderColor = (colors) => {
  let html = "";
  for (let i = 0; i < colorList.length; i++) {
    let color = colors[i];
    html += `<button class="color-button ${color}" onclick="changeColor('${color}')"></button>`;
  }
  document.querySelector("#colorContainer").innerHTML = html;
};
renderColor(colorList);

let changeColor = (color) => {
  //Xóa class màu cũ
  for (index = 0; index < colorList.length; index++){
    document.querySelector("#house").classList.remove(colorList[index]);
  }
  document.querySelector("#house").classList.add(`${color}`);
};
