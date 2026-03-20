
// feature-ui-logic bazam


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

  const resultado = validarIntent(intento);
  logTerminal("Resultat: " + resultado.join(" "));

  actualizarRondes();

  const estat = comprovarFinalJoc(resultado, rondes);
  if (estat === "victoria") {
    logTerminal(">> ACCÉS CONCEDIT. CODI CORRECTE! <<", "exito");
    btn.disabled = true;
  } else if (estat === "derrota") {
    logTerminal(">> SISTEMA BLOCAT. El codi era: " + SECRET.join(" - "), "error");
    btn.disabled = true;
  }
});


// feature-game-engine jo



const SECRET = generarCodiSecret();

function generarCodiSecret() {
  const codi = [];
  for (let i = 0; i < 4; i++) {
    codi.push(Math.floor(Math.random() * 10));
  }
  return codi;
}


function validarIntent(intent) {
  const pistes = [];
  const secretUsed = [false, false, false, false];
  const intentUsed  = [false, false, false, false];

  for (let i = 0; i < 4; i++) {
    if (intent[i] === SECRET[i]) {
      pistes[i]     = "1";
      secretUsed[i] = true;
      intentUsed[i] = true;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (intentUsed[i]) continue;
    for (let j = 0; j < 4; j++) {
      if (secretUsed[j]) continue;
      if (intent[i] === SECRET[j]) {
        pistes[i]     = "Ø";
        secretUsed[j] = true;
        break;
      }
    }
    if (!pistes[i]) {
      pistes[i] = "×";
    }
  }

  return pistes;
}

function comprovarFinalJoc(pistes, rondesRestants) {
  const victoria = pistes.every(p => p === "1");

  if (victoria) {
    return "victoria";
  } else if (rondesRestants <= 0) {
    return "derrota";
  }
  return null;
}