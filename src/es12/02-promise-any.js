const prom1 = new Promise((resolve, reject) => reject('Reject'));
const prom2 = new Promise((resolve, reject) => resolve('Resolve'));
const prom3 = new Promise((resolve, reject) => resolve('Resolve 2'));

Promise.any([prom1, prom2, prom3])
    .then(response => console.log(response));