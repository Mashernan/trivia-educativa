const questions = [
    {
      id: 1,
      type: "multiple",
      question: "¿Qué es Git?",
      options: [
        "Un sistema operativo",
        "Un lenguaje de programación",
        "Un sistema de control de versiones",
        "Un editor de texto"
      ],
      answer: "Un sistema de control de versiones"
    },
    {
      id: 2,
      type: "truefalse",
      question: "Scrum es una metodología ágil que usa roles como Product Owner y Scrum Master.",
      answer: true
    },
    {
      id: 3,
      type: "multiple",
      question: "¿Qué comando de Git se usa para crear una nueva rama?",
      options: [
        "git commit",
        "git branch nueva-rama",
        "git init",
        "git add"
      ],
      answer: "git branch nueva-rama"
    },
    {
      id: 4,
      type: "truefalse",
      question: "Git es un sistema de control de versiones distribuido",
      answer: true
    },
    {
      id: 5,
      type: "multiple",
      question: "¿Cuál es el propósito de la rama main en Git Flow?",
      options: [
        "Desarrollar nuevas funcionalidades",
        "Integrar cambios antes de testear",
        "Contener el código estable en producción",
        "Corregir errores críticos"
      ],
      answer: "Contener el código estable en producción"
    },
    {
      id: 6,
      type: "multiple",
      question: "¿Qué tipo de rama se usa para agregar una nueva funcionalidad?",
      options: [
        "main",
        "hotfix/",
        "feature/",
        "release/"
      ],
      answer: "feature/"
    },
    {
      id: 7,
      type: "truefalse",
      question: "Es recomendable hacer merge directo a main desde cualquier rama",
      answer: false
    },
    {
      id: 8,
      type: "truefalse",
      question: "Se puede automatizar el despliegue de un proyecto en GitHub usando GitHub Actions",
      answer: true
    },
    {
      id: 9,
      type: "multiple",
      question: "¿Qué archivo puede excluir carpetas o archivos del control de versiones en Git?",
      options: [
        "README.md",
        ".gitignore",
        "package.json",
        "main.yml"
      ],
      answer: ".gitignore"
    },
    {
      id: 10,
      type: "multiple",
      question: "¿Cuál es el objetivo principal de una rama release/ en Git Flow?",
      options: [
        "Probar nuevas tecnologías",
        "Lanzar una versión estable para producción",
        "Corregir bugs críticos",
        "Documentar cambios"
      ],
      answer: "Lanzar una versión estable para producción"
    }
  ];
  
  export default questions;
  
