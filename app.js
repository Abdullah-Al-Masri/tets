// const amount = 12;

// if (amount < 10){
//     console.log('small number');
// }else {
//     console.log('large number');
// }

// console.log('amount is the first app');

// //repeat logs every 1s
// setInterval(()=>{
//     console.log("🚀 ~ file: app.js ~ line 4 ~ amount", amount)

// },1000)

//CommonJS , every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// modules

// to get the module exports you need to use require

const names = require("./2-names");
const sayHi = require("./3-utils");

// console.log(names);
//invoke module method sayHi()
// sayHi("susan");
// sayHi(names.peter);
// sayHi(names.john);

// const data  =require('./4-alternative-flavour');
// console.log("🚀 ~ file: app.js ~ line 37 ~ data ", data)

// require("./5-mind-gernate");

// require('./6-os-module')

//npm refer to node package manger 
//npm i packageName -- to install package

// package.json - manifest file (stores important info about project)

// to create manual package.json use cmd npm init
//or npm init -y default package.json


const _=require('lodash');
const items = [1,[2, [3, [4]], 5]]
const newItems = _.flattenDeep(items)
console.log(newItems);