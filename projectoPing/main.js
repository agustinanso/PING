const formulario = document.getElementById("formulario-1");

const btnEnviar = document.querySelector("#btnEnviar");
const correo = document.querySelector("#correo");
const alertRoja = document.querySelector("#alertRoja");
const alertVerde = document.querySelector("#alertVerde");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    const dato = {
        correo: formulario.correo.value,
    };

    if (!expresionRegular.test(dato.correo)) {
        correo.classList.add("border-red-500");
        alertRoja.classList.remove("hidden");
        return;
    } else {
        alertRoja.classList.add("hidden");
        alertVerde.classList.remove("hidden");
        correo.classList.remove("border-red-500");
        correo.classList.add("border-emerald-500");
        return;
    }
});
