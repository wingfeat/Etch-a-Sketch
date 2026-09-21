const container = document.querySelector(".container");
const ask = document.querySelector("button");

ask.addEventListener("click", () => {
  let anwser = prompt("test");
  const size = 100 / anwser;

  if (anwser >= 100) {
    alert("You can't display so much squares");
  } else {
    container.innerHTML = "";
    for (i = 0; i < anwser * anwser; i++) {
      const div = document.createElement("div");
      container.appendChild(div);
      div.style.width = `${size}%`;
      div.style.height = `calc(100% / ${anwser})`;
      div.addEventListener("mouseover", () => {
        div.style.background = "red";
      });
      div.addEventListener("mouseout", () => {
        div.style.background = "";
      });
    }
  }
});
