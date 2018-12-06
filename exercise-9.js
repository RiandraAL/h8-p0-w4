/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
Jika tidak ditemukan sama sekali, kembalikan nilai false.
*/

function checkAB(num) {
  // you can only write your code here!
  var cekA ='';
  var cekB ='';
  for(var i=0; i<num.length; i++){
    if(num[i]==='a'){
      cekA=i;
    }
    else if(num[i]==='b'){
      cekB=i;
    }
  }
  return cekA-cekB === 4 || cekB-cekA === 4;
  //console.log(cekA);
  //console.log(cekB);
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false