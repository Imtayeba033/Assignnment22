//  const info={
//     name :"tayaba",
//     address:"rampura",
//     age:"22 year",
//     tayebaa:function(){ 
//         console.log("thik ache");
        
//     }
//  }
//  console.log(info);
 
 
 const array =[[10,20,30],[50,60,40],[70,80,90]]
//  console.log(array[1]);
// for(const ar of array){
//     for(const a of ar){
//         console.log(a)
//     }

// }
//  for(let i=0;i<array.length;i++){
// // console.log(array[i]);
// for (let j = 0; j < array[i].length; j++) {
//     console.log( array[i][j]);
// }
//  }

// closure
// let a =10; global
// function tayeba() {
//     console.log(a);
//     let b =10;
//     console.log(b);
// }
// tayeba()


// function sum(a,b) {
//     return a+b
    
// }
// function multiply(a,b ,another) {
//     const c=a+b;
//     const d= a-b;
//     function multiplication () {
//         const e = another(c,d);
//         const result =e*c*d;
//         return result
        
//     }
//     return multiplication
// }
// const result=multiply(10,20,sum)
// console.log(result());

// callback
// arrow function
// const tayebas=(params) =>{
//     console.log(params);
// }
// tayebas(10)
// const sum=(a,b)=>(a+b);
// console.log(sum(10,50));
//  const info={
//     name :"tayaba",
//     address:"rampura",
//     age:"22 year",
//     tayebaa:function(){ 
//         console.log("thik ache");
        
//     },
//  }
//  const {name,adress ,age,tayebaa}=info;
//  console.log(name);
//  const arrays =[10,20,30];
//  const[mim,jui,rafi]=arrays
//  console.log(jui)

// spread operator
// const arrayy =[10,20,30,40,50,60,70,80,90]
// const arra =[...arrayy]
// arra.push(55)
// console.log(arrayy);
// console.log(arra);

//  map
const arrayy =[10,20,30,40,50,60,70,80,90];
// arrayy.map(arr=>console.log(arr))
const result= arrayy.filter(ar=>ar>50)
console.log(result);
