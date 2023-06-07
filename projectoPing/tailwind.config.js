/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            personaFonts: {
                libre: "'Libre Franklin', sans-serif;",
            },

            Colors: {
                azulClaro: "#4f7df3",
                Cielo: "#c2d3ff",
                rojoW: "#ff5263",
                gris: "#969696",
                azulOscuro: "#151f29",
            },
        },
    },
    plugins: [],
};
