const frases = [

    "La cuina necessita temps i amor.",

    "El millor ingredient és compartir.",

    "Les receptes expliquen històries.",

    "Cada plat té un record."

];

const boto = document.getElementById("botoFrase");
const frase = document.getElementById("frase");

boto.addEventListener("click", () => {

    const numero = Math.floor(Math.random() * frases.length);

    frase.textContent = frases[numero];
});