const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('1986-02-27');
console.table(matchers);