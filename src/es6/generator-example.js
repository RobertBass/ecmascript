const array1 = [5, 4, 3, 2, 1];

for (let number of array1) {
  console.log(number);
}

//=================================================================

const array2 = { a: 1, b: 2, c: 3, d: 4, e: 5 };

function showData(data) {
  console.log("{");

  for (let obj in data) {
    for (let i = 0; i < Object.keys(data).length; i++) {
      if (obj.match(Object.keys(data)[i])) {
        console.log(` [${obj} : ${Object.values(data)[i]}]`);
        while(Object.keys(data) > i){console.log(",");}
      }
    }
  }

  console.log("}");
}

showData(array2);
