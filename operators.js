// /ASSIGNMENT

// example 4
// ******
// *****
// ****
// ***
// **
// *
for ( let i = 6;i>0;i--){
console.log("*".repeat(i));
}

// example 5
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
    
for(let i = 1; i<5;i++){
    let spaces=" ".repeat(5-i);
    let stars="*".repeat(i);
    console.log(spaces+stars);
}
for(let i = 5; i>0;i--){
    let spaces=" ".repeat(5-i);
    let stars ="*".repeat(i);
    console.log(spaces+stars);
}
// example 6
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// for(let i = 1 ; i<=9;i+=2){
// let spaces=" ".repeat((9-i) /2);
let stars="*".repeat(i);{
console.log(spaces+stars)
}
for(let i = 7; i>=1; i-=2){
    let spaces=" ".repeat((9-i) /2);
    let stars ="*".repeat(i);
    console.log(spaces+stars)
}
// example 7
//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *
console.log("*".repeat(7))
for(let i = 1 ; i<=8;i++){
    if (i ==1){
        console.log("*".repeat(7));
    }
    else(console.log(" ".repeat(6)+"*"));

}
// example 8
//*******
//*
//*
//*
//*
//*
for(let i = 1 ; i<=8;i++){
    if (i ==1){
        console.log("*".repeat(7));
    }
    else(console.log("*"));

 }
// generate 6 random numbers between 1 and 49
let count = 0;
console.log("generate random number")

while ( count< 6) {
    let randomNumber = Math.floor(Math.random() * 49) + 1;
    console.log("Generated random number : "  ,randomNumber);
    console.log("continue generating");
    count++ ;
}

