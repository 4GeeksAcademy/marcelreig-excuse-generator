import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
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

  const getRandomItem = array => array[Math.floor(Math.random() * array.length)]

  const generateExcuse = () => {
    return `${getRandomItem(who)} ${getRandomItem(action)} ${getRandomItem(what)} ${getRandomItem(when)}`;
  }

  document.getElementById("excuse").innerText = generateExcuse();
};
