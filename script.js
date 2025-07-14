// Datos de todos los semestres
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
  },
  {
    semestre: "Semestre 2",
    creditos: 42,
    materias: [
      {
        nombre: "Antropologia filosófica",
        clasificacion: ["estudios-generales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Fundamentos de psicología clínica",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicología de los procesos básicos",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicolobiología",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicología del adulto y del adulto mayor",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicología del aprendizaje",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicologia del trabajo",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      }
    ]
  },
  {
    semestre: "Semestre 3",
    creditos: 42,
    materias: [
      {
        nombre: "Pensamiento-científico y tecnológico",
        clasificacion: ["estudios-generales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Curso Electivo General LPSC",
        clasificacion: ["estudios-generales", "electiva"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Modelos y métodos de evaluación",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicopatología descriptiva",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: ["Fundamentos de psicología clínica", "Psicología de la Personalidad"]
      },
      {
        nombre: "Neuropsicologías clínica",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicología educativa",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Curso Electivo Profesional LPSC",
        clasificacion: ["estudios-generales", "electiva"],
        creditos: 6,
        prerrequisitos: []
      }
    ]
  },
  {
    semestre: "Semestre 4",
    creditos: 42,
    materias: [
      {
        nombre: "Ética social cristiana",
        clasificacion: ["estudios-generales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Enfoque de investigación cuantitativo en psicología",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: ["Modelos y métodos de evaluación"]
      },
      {
        nombre: "Teoría y técnica de la entrevista",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: ["Fundamentos de psicología clínica", "Psicología de la Personalidad"]
      },
      {
        nombre: "Psicolopatología comprensiva",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: ["Psicopatología descriptiva"]
      },
      {
        nombre: "Psicología de la desigualdad",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicología de la familia",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicología de la intervención social",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      }
    ]
  },
  {
    semestre: "Semestre 5",
    creditos: 39,
    materias: [
      {
        nombre: "Tendencias de liderazgo",
        clasificacion: ["estudios-generales", "obligatoria"],
        creditos: 3,
        prerrequisitos: []
      },
      {
        nombre: "Análisis de datos en investigación psicológica",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: ["Enfoque de investigación cuantitativo en psicología"]
      },
      {
        nombre: "Terapia cognitivo conductual",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicogerantología clínica",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Evaluación y diagnóstico clínico",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: ["Teoría y técnica de la entrevista", "Psicopatología descriptiva"]
      },
      {
        nombre: "Intervenciones psicológicas en niños y adolescentes",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Evaluación del recurso humano",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      }
    ]
  },
  {
    semestre: "Semestre 6",
    creditos: 46,
    materias: [
      {
        nombre: "Pensamiento crítico y creativo",
        clasificacion: ["estudios-generales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Enfoque de investigación cualitativo en psicología",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: ["Análisis de datos en investigación psicológica"]
      },
      {
        nombre: "Piscoterapia psicoanalitica",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicofarmacología",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Abordajes psicoterapéuticos de las situaciones de urgencia",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Prácticas profesionales intensivas I del programa de psicología clínica",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 16,
        prerrequisitos: []
      },
      {
        nombre: "Servicio social",
        clasificacion: ["estudios-profesionales", "concentracion"],
        creditos: 0,
        prerrequisitos: []
      }
    ]
  },
  {
    semestre: "Semestre 7",
    creditos: 43,
    materias: [
      {
        nombre: "Retos de la comunicación contemporánea",
        clasificacion: ["estudios-generales", "obligatoria"],
        creditos: 3,
        prerrequisitos: []
      },
      {
        nombre: "Curso Electivo General LPSC",
        clasificacion: ["estudios-generales", "electiva"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Terapia sistemica",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicología clínica y de la salud",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: ["Psicolopatología comprensiva"]
      },
      {
        nombre: "Curso Electivo Profesional LPSC",
        clasificacion: ["estudios-profesionales", "concentracion"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Prácticas profesionales intensivas II del programa de psicología clínica",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 16,
        prerrequisitos: []
      }
    ]
  },
  {
    semestre: "Semestre 8",
    creditos: 40,
    materias: [
      {
        nombre: "Sostenibilidades y responsabilidad",
        clasificacion: ["estudios-generales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Seminario de proyectos de investigación psicología",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Curso Electivo Profesional LPSC",
        clasificacion: ["estudios-profesionales", "concentracion"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Internado psicología clínica",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 22,
        prerrequisitos: []
      }
    ]
  },
  {
    semestre: "Semestre 9",
    creditos: 30,
    materias: [
      {
        nombre: "Retos y dinámicas globales",
        clasificacion: ["estudios-generales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Innovaciones en mediación tecnológica en psicología",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: ["Enfoque de investigación cualitativo en psicología"]
      },
      {
        nombre: "Curso Electivo Profesional LPSC",
        clasificacion: ["estudios-profesionales", "concentracion"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Programa de evaluación final del programa de psicología clínica",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 12,
        prerrequisitos: []
      }
    ]
  }
];
