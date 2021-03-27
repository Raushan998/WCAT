// function fun(){
//     return 123;
// }
// let val=`Hello ${fun()}`;
// console.log(val);
// let val=`H${fun}`;
// console.log(val[1]);
// let val="25";
// val=parseInt(val);
// let str="";
// while(val>0){
//     if(val%2!=0)str='1'+str;
//     else str='0'+str;
//     val=Math.floor(val/2);
// }
// console.log(str);
// let val="11001";
// let num=0,pow=1;
// for(let i=val.length-1;i>=0;i--){
//     if(val[i]=='1'){
//         num=num+pow;
//     }
//     pow=pow*2;
// }
// console.log(num);
/*  
   printing the first character of everyword to be uppercase in string
*/
// let str="   pepcoding institute  ";
// let flag=true;
// let str1="";
// for(let i=0;i<str.length;i++){
//     if(flag && str[i]!=' '){
//         str1+=str[i].toUpperCase();
//         flag=false;
//     }
//     else if(str[i]==' '){
//         flag=true;
//         str1+=' ';
//     }
//     else str1+=str[i];
// }
// console.log(str1);

/* palindrome string */
// function Palindrome(str){
//     let i=0,j=str.length-1;
//     while(i<j){
//         if(str[i]!=str[j])return false;
//         i++,j--;
//     }
//     return true;
// }
// if(Palindrome("MalayalaM")){
//     console.log("It is a palindrome string ✔️")
// }
// else{
//     console.log("It is not a palindrome string ❌")
// }
// if(Palindrome("Hello World")){
//     console.log("It is a palindrome string ✔️")
// }
// else{
//     console.log("It is not a palindrome string ❌")
// }
// /* reverse every word in a string */
// function ReverseWord(str){
//     // console.log(str);
//     let str1="";
//     for(let i=0;i<str.length;i++){
//         if(str[i]==' '){
//             str1+=' ';
//             continue;
//         }
//         let j=i;
//         while(j<str.length && str[j]!=' ')j++;
//         j--;
//         k=j;
//         while(j>=i){
//             str1+=str[j];
//             j--;
//         }
//         i=k;
//     }
//     console.log(str1);
// }
// ReverseWord("Hello World");
// ReverseWord("Pepcoding Institute"); 
// ReverseWord("I Write Code.");

// /* first non repeating character*/
// function NonRepeatingCharacter(str){
//     let obj={};
//     for(let i=0;i<str.length;i++){
//         if(str[i]==' ')continue;
//         let val=str[i];
//         if(obj[val]===undefined){
//             obj[str[i]]=[1,i];
//         }
//         else{
//             let val=obj[str[i]][0];
//             val+=1;
//             obj[str[i]]=[val,i];
//         }
//     }
//     let min_element,min_index=1e9;
//     let keys=Object.keys(obj);
//     for(let i=0;i<keys.length;i++){
//         if(obj[keys[i]][0]==1 && min_index>obj[keys[i]][1]){
//             min_element=keys[i];
//             min_index=obj[keys[i]][1];
//         }
//     }
//     console.log(min_element);
// }
// NonRepeatingCharacter("Hello world");
// NonRepeatingCharacter("abababcabdecdhahd")

// /* count the character*/
// function CountCharacter(str){
//     let obj={};
//     for(let i=0;i<str.length;i++){
//         let val=str[i];
//         if(obj[val]===undefined)
//             obj[val]=1;
//         else
//            obj[val]+=1;
//     }
//     console.log(obj);
// }
// CountCharacter("abadbcabds");

// Setup
// Setup
// var collection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
// };
  
  // Only change code below this line
// function updateRecords(object, id, prop, value) {
//     if(object[id][prop]===undefined && prop!=='tracks'){
//             object[id][prop]=value;
//     }
//     else if(object[id][prop]===undefined && prop==='tracks'){
//         object[id][prop]=[];
//         object[id][prop].push(value);
//     }
//     else if(object[id][prop]!==undefined && value===''){
//         delete object[id][prop];
//     }
//     else if(object[id][prop]!==undefined && prop==='tracks'){
//         object[id][prop].push(value);
//     }
//     return object;
// }

// var collection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
// function updateRecords(object, id, prop, value) {
//     if(object[id][prop]===undefined && prop!=='tracks'){
//             object[id][prop]=value;
//     }
//     else if(object[id][prop]===undefined && prop==='tracks'){
//         object[id][prop]=[];
//         object[id][prop].push(value);
//     }
//     else if(object[id][prop]!==undefined && value===''){
//         delete object[id][prop];
//     }
//     else if(object[id][prop]!==undefined && prop==='tracks'){
//         object[id][prop].push(value);
//     }
//     return object;
// }

// updateRecords(collection, 5439, 'artist', 'ABBA');
// updateRecords(collection, 5439, 'tracks', 1234);
// updateRecords(collection, 5439, 'tracks', 123454);
// updateRecords(collection,5439,'tracks','');
