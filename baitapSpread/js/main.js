let str = document.querySelector("h2").innerHTML;
//Spread Operator
let chars = [...str];
let renderChars = (arr) => {
  let html = "";
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    html += `<span>${char}</span>`;
  }
  document.querySelector(".heading").innerHTML = html;
};

renderChars(chars);
