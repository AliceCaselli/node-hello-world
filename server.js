let frasiMotivazionali = [
    "Se vuoi qualcosa che non hai mai avuto, devi fare qualcosa che non hai mai fatto.",
    "La vita è per il 10% cosa ti accade e per il 90% come reagisci.",
    "Non si è mai troppo vecchi per fissare un nuovo obiettivo o per sognare un nuovo sogno.",
    "Non rinunciare a provare a fare ciò che vuoi veramente fare. Dove c'è amore e ispirazione, non credo che si possa sbagliare.",
    "Sono grato a tutte quelle persone che mi hanno detto di no. È grazie a loro se sono quel che sono.",
    "Sembra sempre impossibile, finché non viene fatto.",
    "Non importa quanto vai piano, l'importante è non fermarsi."
];


const http = require("http");

const dotenv = require("dotenv");

dotenv.config();

let port = +process.env.PORT || 8080;


function htmlResponse(res, content) {
    res.writeHead(200, { "Content-Type": "text/html; charset= utf-8" });
    res.end(content);
}

// console.log(frasiMotivazionali.length);

function random() {
    number = Math.floor(Math.random() * frasiMotivazionali.length);
    return number;
}


const server = http.createServer(function (req, res) {

    const index = random();
    htmlResponse(res, "<h1>" + frasiMotivazionali[index] + "</h1>");

});

server.listen(port, function () {
    console.log("http://localhost:" + port);
});






