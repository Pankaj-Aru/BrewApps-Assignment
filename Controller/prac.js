
import fs from "fs"

export function readData(){

    let data;
    if(fs.existsSync('../Assets/files/data.txt')){
         data= fs.readFileSync('../Assets/files/data.txt',{encoding:'utf8', flag:'r'})
           
    console.log(">>",data)
    }
    
    
   
    return  data;
}

readData();