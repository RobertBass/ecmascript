const user = {username: 'RobertBass', age: 34, country: 'Ecuador'};
const {username, ...values} = user;
console.log(username);
console.log(values);