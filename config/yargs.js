const argv = require("yargs").option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    description:"es la base de la tabla de multiplicasion"
}).option('l',{
    alias:"listar",
    type:"boolean",
    demandOption:true,
    default:false,
    description:"es el comado de lista"
}).option('h',{
    alias:"hasta",
    type:"number",
    default:10,
    description:"ingresar el numero que donde se quiere itrerar"
}).check((argv,options)=>{
    if(isNaN(argv.b)){
        throw "La base tiene que ser un numero"    
    }
    return true;
}).argv;

module.exports=argv;