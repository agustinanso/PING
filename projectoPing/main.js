const formulario = document.getElementById("formulario-1");

const btnEnviar = document.querySelector("#btnEnviar");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const dato = {
        correo: formulario.correo.value,
    };

    if (dato.correo === "") {
        console.log("No hay nada escrito");
    }

    if (dato.correo.length <= 4) {
        console.log("correo invalido");
        return;
    }
});
