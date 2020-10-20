const doesnotexists = require("../index");
const fs = require("fs");

// person
doesnotexists("person")
    .then(x => fs.writeFileSync("./person.png", x))
    .catch(console.error);

// horse
doesnotexists("horse")
    .then(x => fs.writeFileSync("./horse.png", x))
    .catch(console.error);

// cat
doesnotexists("cat")
    .then(x => fs.writeFileSync("./cat.png", x))
    .catch(console.error);

// art
doesnotexists("artwork")
    .then(x => fs.writeFileSync("./art.png", x))
    .catch(console.error);