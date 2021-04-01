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
    let finalData="";
    for(let i=3;i<processData.length;i++){
        let data=fs.readFileSync(processData[i],'utf-8');
        let arrData=data.split(" ");
        arrData=arrData.join("");
        // arrData=arrData.split("\n");
        // arrData=arrData.join("");
        if(arrData.includes("\r")){
            arrData=arrData.split("\r");
            arrData=arrData.join("");
        }
        finalData+=arrData;
    }
    
    console.log(finalData);
}
// Code of num
else if(processData.includes("num")){
    let finalData="";
    let num=1;
    for(let i=3;i<processData.length;i++){
        let data=fs.readFileSync(processData[i],'utf-8');
        let lines=data.split("\n");
        if(data.includes("\r\n")){
            lines=data.split("\r\n");
        }
        for(let i=0;i<lines.length;i++){
            if(lines[i]!=""){
                console.log(num+"."+lines[i]);
            }
            else{
                console.log(num+"."+"Empty line");
            }
            num+=1;
        }
    }
}
else if(processData.includes("--help")){
    console.log("Type following command with wcat");
    console.log("ns filename-> To print the data inside the file without any space");
    console.log("ns filename-> To print the data inside the file without any new line");
    console.log("w filename-> To write data inside the file");
    // console.log("r filename-> Read file");
    console.log("a filename-> Append the data inside the filename");
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
          //  console.log(lines);
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
