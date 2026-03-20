
// BAZAM, ESTUDIANT A.
const selects = document.querySelectorAll(".code-input");
const terminal = document.getElementById("terminal");
const btn = document.getElementById("btn-enviar");
let rondes = 5;


selects.forEach(select => {
  for (let i = 0; i <= 9; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }

});


function logTerminal(mensaje, tipo) {
  const linea = document.createElement("p");
  linea.textContent = mensaje;
  if (tipo === "error") linea.style.color = "red";
  if (tipo === "exito") linea.style.color = "lime";
  terminal.appendChild(linea);
  terminal.scrollTop = terminal.scrollHeight;

}


function actualizarRondes() {
  rondes--;
  document.getElementById("rondes-restants").textContent = rondes;

}


btn.addEventListener("click", () => {
  if (rondes <= 0) {
    logTerminal("NO QUEDAN INTENTOS", "error");
    return;

  }


  const intento = [];
  selects.forEach(select => {
    intento.push(parseInt(select.value));

  });

  logTerminal("Intento: " + intento.join(" - "));

  const resultado = ["1", "Ø", "X", "1"]; 
  logTerminal("Resultado: " + resultado.join(" "));

  actualizarRondes();

  if (rondes === 0) {
    logTerminal("GAME OVER", "error");


  }
});
