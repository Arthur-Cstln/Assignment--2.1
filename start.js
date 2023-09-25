let express = require("express");

let app = express();

app.use(express.static('IHM'));
/*
app.get('/', (request, rep) => {
});
*/

app.listen(3008, () => {
    console.log("Serveur is running on port 3008 !")
});


