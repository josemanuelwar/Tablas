
const { creararchivo }=require("./helpers/multiplicar");

const argv  = require("./config/yargs");
console.log(argv);
console.log("base:yargs",argv.base)

creararchivo(argv.base, argv.l,argv.h)
        .then(nombreArchivo => console.log(nombreArchivo))
        .catch(err=> console.log(err));