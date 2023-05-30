
function* iterate (array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate (['Roberto', 'David', 'Ana', 'Ulises', 'Evelyn']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function* getId () {
    while (true) {
        yield Math.random().toString(18).substring(5).toUpperCase();
    }
}

const id = getId();
console.log(id.next().value);