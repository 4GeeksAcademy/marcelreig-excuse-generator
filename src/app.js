import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  // Excusas
  let who = [
    "Mi hermana",
    "Mi gato",
    "Mi madre",
    "Mi prima",
    "Mi profesora",
    "Mi amiga",
  ];
  let action = [
    "se comió",
    "araño",
    "me rompió",
    "me robó",
    "me escondió",
    "orinó en",
  ];
  let what = [
    "mi tarea",
    "mi comida",
    "mi coche",
    "mi móvil",
    "mi compu",
    "mi perro",
  ];
  let when = [
    "ayer",
    "hace una semana",
    "cuando estaba en la ducha",
    "hace un año",
    "hace cinco minutos",
    "hace tres años",
  ];
  // Función para generar excusas
  function generateExcuse() {
    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    return `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;
  }

  document.getElementById("excuse").innerText = generateExcuse();
};
