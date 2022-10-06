
const { readFileSync, writeFileSync } = require('fs');

// const test = readFileSync('../content/first.txt', 'utf8');
const first = readFileSync('./content/first.txt', 'utf-8');
// console.log("🚀 ~ file: app.js ~ line 48 ~ first", first);
const second = readFileSync('./content/second.txt', 'utf-8');
// console.log("🚀 ~ file: app.js ~ line 49 ~ second", second);

console.log(first,second);

writeFileSync('./content/result.txt',
`here is the result: ${first}, ${second}`, {flag:'a'})