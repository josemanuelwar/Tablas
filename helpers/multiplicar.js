const fs = require("fs")

const colors = require('colors')
const  creararchivo= async (base = 5,listar=false,iterar=0)=>{
    try{
        let salida, cosoloa="";
        for (let index = 0; index < iterar; index++) {
            i=index+1;
            salida += (index+1)+`x ${base} = ${base*i}\n`
            cosoloa+=(index+1)+` ${colors.green("*")} ${base} = ${base*i}\n`;
            
        }
        if(listar == true){
            console.log(colors.blue("================="))
            console.log(colors.gray("tabla del"),base)
            console.log(colors.blue("================="))
            console.log(cosoloa)
        } 

        fs.writeFileSync("../salida/tabla-"+base+".txt",salida);

        return "tabla-"+base+".txt";

    }catch(err){
        console.log(err)
    }
}
module.exports={
    creararchivo
}

