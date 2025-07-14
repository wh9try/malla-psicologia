// Datos de ejemplo para Semestre 1 (puedes seguir el mismo formato para el resto)
const malla = [
  {
    semestre: "Semestre 1",
    creditos: 36,
    materias: [
      {
        nombre: "Fundamentos de la Salud Física y emocional",
        clasificacion: ["estudios-generales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Historia de la psicología",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicología de la Personalidad",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Anátomo-fisiología",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicologia del niño y del adolescente",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicologia social",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      }
    ]
  }
];

const container = document.getElementById("malla");

malla.forEach((sem) => {
  const semDiv = document.createElement("div");
  semDiv.classList.add("semestre");

  const title = document.createElement("h2");
  title.textContent = sem.semestre;

  const cred = document.createElement("div");
  cred.classList.add("creditos-semestre");
  cred.textContent = `Créditos: ${sem.creditos}`;

  semDiv.appendChild(title);
  semDiv.appendChild(cred);

  sem.materias.forEach((mat) => {
    const matDiv = document.createElement("div");
    matDiv.classList.add("materia", ...mat.clasificacion);

    if (mat.prerrequisitos.length > 0) {
      matDiv.classList.add("prerrequisito");
    }

    const name = document.createElement("span");
    name.textContent = mat.nombre;

    const plus = document.createElement("span");
    plus.classList.add("info");
    plus.textContent = "+";
    plus.addEventListener("click", (e) => {
      e.stopPropagation();
      document.getElementById("modal-title").textContent = mat.nombre;
      document.getElementById("modal-info").innerHTML =
        `<strong>Créditos:</strong> ${mat.creditos}<br>` +
        (mat.prerrequisitos.length > 0
          ? `<strong>Prerrequisitos:</strong> ${mat.prerrequisitos.join(", ")}`
          : "Sin prerrequisitos");
      document.getElementById("modal").classList.remove("hidden");
    });

    const aprobar = document.createElement("button");
    aprobar.textContent = "Se aprueba";
    aprobar.classList.add("btn-aprobar");
    aprobar.addEventListener("click", (e) => {
      e.stopPropagation();
      matDiv.classList.toggle("aprobada");
    });

    matDiv.appendChild(name);
    matDiv.appendChild(aprobar);
    matDiv.appendChild(plus);
    semDiv.appendChild(matDiv);
  });

  container.appendChild(semDiv);
});

// Modal close
document.querySelector(".close-button").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});
