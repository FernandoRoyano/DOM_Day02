const customer = document.querySelector(".customer");
const materials = document.querySelector("#materials");
const measures = document.querySelectorAll(".measures");
const comments = document.querySelector(".comments");
const send = document.querySelector(".send");
const result = document.querySelector("#result");

send.onclick = () => {
  let customervalue = customer.value;
  let materialsValue = materials.value;
  let measuresValue = measures.value;
  let commentsValue = comments.value;

  result.textContent = "Hola";
  result.value = `${customervalue} ha pedido una caja de ${materialsValue} con unas dimensiones ${measuresValue}`;
};
