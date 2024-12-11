const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ages = [10, 20, 13, 14, 5, 61, 17, 18, 19, 10];
let words = ['banana', 'apple', 'mango', 'fig', 'graphe'];

function filterEvenNumbers(num) {
  return num % 2 === 0;
}

app.get('/even-numbers', (req, res) => {
  let result = numbers.filter((num) => filterEvenNumbers(num));
  res.json(result);
});

function filterAgesGreaterthan18(age) {
  return age >= 18;
}
app.get('/old-ages', (req, res) => {
  let result = ages.filter((age) => filterAgesGreaterthan18(age));
  res.json(result);
});

function filterGreaterThanWordsFive(word) {
  return word.length > 5;
}

app.get('/long-words', (req, res) => {
  let results = words.filter((word) => filterGreaterThanWordsFive(word));
  res.json(results);
});

let fileSizes=[200,100,50,30,400,500,300];

function filterSmallFileSize(filesize,fileSizeParam)
{
  return filesize<fileSizeParam;
}
app.get('/small-filesizes',(req,res)=>{
  let fileSizeParam=parseFloat(req.query.fileSize);
  let results=fileSizes.filter((filesize)=>filterSmallFileSize(filesize,fileSizeParam));
  res.json(results);

})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
