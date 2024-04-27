/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  const randonWho = Math.floor(Math.random() * who.length);
  const randomAction = Math.floor(Math.random() * action.length);
  const randomWhat = Math.floor(Math.random() * what.length);
  const randomWhen = Math.floor(Math.random() * when.length);

  return `  ${who[randonWho]}  ${action[randomAction]} ${what[randomWhat]}
  ${when[randomWhen]}`;
}

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = randomExcuse();
  console.log(randomExcuse());
  console.log("Hello Rigo from the console!");
};
