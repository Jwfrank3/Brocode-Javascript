const PI = 3.14159;
let radius;
let circumeference;
radius = Number(radius);

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumeference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumeference + "cm";
};
