const exp_academica = [{ Nombre: "Licenciatura en Ciencias de la Computación", Año: 2020 }];
const exp_profesional = [{ Nombre: "Malabarista", Año: 2021 }, { Nombre: "Domador de leones", Año: 2022 }];

const contenedorExpAcademica = document.getElementById("exp-academica");
const contenedorExpProfesional = document.getElementById("exp-profesional");

const ulAcademica = document.createElement("ul");
exp_academica.forEach(exp => {
    const li = document.createElement("li");
    li.textContent = `${exp.Nombre} (${exp.Año})`;
    ulAcademica.appendChild(li);
});

const ulProfesional = document.createElement("ul");
exp_profesional.forEach(exp => {
    const li = document.createElement("li");
    li.textContent = `${exp.Nombre} (${exp.Año})`;
    ulProfesional.appendChild(li);
});

contenedorExpAcademica.appendChild(ulAcademica);
contenedorExpProfesional.appendChild(ulProfesional);