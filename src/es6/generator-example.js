const array1 = [5, 4, 3, 2, 1];

for (let numero of array1) {
  console.log(numero);
}

//=================================================================

const array2 = { a: 1, b: 2, c: 3 };

console.log('{');

for (let obj in array2) {
  for (let i = 0; i < Object.keys(array2).length; i++) {
    if (obj.match(Object.keys(array2)[i])) {
      console.log(`[${obj} : ${Object.values(array2)[i]}]${obj.length >= i ? "," : ""}`);
    }
  }
  
}

console.log('}');