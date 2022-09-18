const hover = () => {
  const text = document.querySelector(".heading").innerHTML;

  let spit = [...text];

  let html = "";
  for (let value of spit) {
    html += `<span>${value}</span>`;
  }
  document.querySelector(".heading").innerHTML = html;
};

hover();
