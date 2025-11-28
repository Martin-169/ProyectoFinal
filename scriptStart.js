/* ==== DIÁLOGO DEL START ==== */

const dialogueLines = [
  "Howdy! Soy Flowey. ¡Flowey la Flor!",
  "En este mundo... es MATAR o MORIR... digo...",
  "Bueno, aquí no tanto. Aquí no estás en el juego, sino en una wiki especial.",
  "Déjame explicarte cómo funciona este lugar...",
  "",
  "Cada zona del subsuelo tiene su propia página:",
  "- Una pequeña wiki del sitio,",
  "- Personajes que puedes clicar para hablar,",
  "- Imágenes de la zona,",
  "- Y si hay subzonas, también puedes entrar a ellas.",
  "",
  "Pero OJO... antes de avanzar a nuevas zonas,",
  "deberás completar algunos minijuegos.",
  "",
  "Quien sabe como seran...",
  "",
  "Cuando estés listo, puedes ir a cualquier zona desde el menú de la izquierda.",
  "",
  "¡Buena suerte, pequeño humano!"
];

let currentLine = 0;
let charIndex = 0;
let typingSpeed = 25;

function typeLine() {
    if (currentLine >= dialogueLines.length) {
        document.getElementById("returnBtn").style.display = "block";
        return;
    }

  const text = dialogueLines[currentLine];
  const dialogueText = document.getElementById("dialogueText");

  if (charIndex < text.length) {
    dialogueText.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeLine, typingSpeed);
  } else {
   
    document.addEventListener("click", nextLineOnce, { once: true });
  }
}

function nextLineOnce() {
  const dialogueText = document.getElementById("dialogueText");
  currentLine++;
  charIndex = 0;
  dialogueText.innerHTML = "";
  typeLine();
}

window.onload = () => {
  typeLine();
};