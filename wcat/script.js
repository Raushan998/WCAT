#!/usr/bin/env node
const fs=require('fs');
// let data=fs.readFileSync("abc.txt","utf-8");
// console.log(data);
// fs.writeFileSync("def.txt","Hello,I am fine..");
// let data="";
// for(let filename=2;filename<process.argv.length;filename++){
//     //console.log(process.argv[filename]);
//     data+=fs.readFileSync(process.argv[filename],"utf-8")+"\n";
// }
// console.log(data);
// let filename1=process.argv[2];
// let filename2=process.argv[3];
// let data1=fs.readFileSync(filename1,"utf-8");
// let data2=fs.readFileSync(filename2,"utf-8");
// console.log(data1,data2);
let processData=process.argv;
if(processData[2]==='a'){
    let previousData=fs.readFileSync(processData[3],"utf-8");
    fs.writeFileSync(processData[3], previousData + "\n" + processData[4])
}
else if(processData[2]==='w'){
    fs.writeFileSync(processData[3],processData[4]);
}
else if(processData.includes('ns')){
    let data=fs.readFileSync(processData[3],'utf-8');
    let lines=data.split(" ");
    if(lines.includes("\r"))
      lines=data.split("\r\n");
    let currentWord="";
    for(let i=0;i<lines.length;i++)
       currentWord+=lines[i];
    console.log(currentWord);
}
else{
    let data="";
    let iUpdated=false;
    for(let i=2;i<processData.length;i++){
        if(processData.includes("ne")){
            if(!iUpdated){
                i+=1;
                iUpdated=true;
            }
            let tempData=fs.readFileSync(processData[i],"utf-8");
            let lines=tempData.split("\n");
            // console.log(lines);
            if(tempData.includes("\r")){
                lines=tempData.split("\r\n");
            }
            let finalData="";
            for(let j=0;j<lines.length;j++){
                if(lines[j]!==""){
                    finalData+=lines[j]+"\n";
                }
            }
            data+=finalData;
        }
        else{
            data+="\n"+fs.readFileSync(processData[i],"utf-8");
        }
    }
    console.log(data);
}
