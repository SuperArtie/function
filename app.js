var prompt = require('sync-prompt').prompt;

/*
//INCREMENT
function inc(x)      { return x+1; }
//SQUARE A NUMBER
function sq(x)   { return x*x; }

var z = square(5);
console.log(z);
var z = square(3);
console.log(z);
var z = square(6);
console.log(z);
var z = square(77);
console.log(z);

//CALCULATE VOLUME 
function area(x, y)
{
  return x*y;
}
function calcVolume(i, j, k)
{
  return area(i, j)*k;
}

var h = prompt('Enter height: ');
var l = prompt('Enter length: ');
var w = prompt('Enter width: ');

var volume = calcVolume(h, l, w);
console.log("volume of the room is: " + volume);
volume>12 ? console.log('whoaaa buddy!') : console.log('buddy? buddy?');

console.log('-------->' + area(sq(inc(3)+inc(4)), sq(2)));

//HELLO
function sayHello()    { console.log('Hello'); }
sayHello();

function makeUpper()
{
  console.log(s.toUpperCase(s));
}

var s = prompt('string me: ');
makeUpper(s);


function canDrink(a)
{
  a<21 ? console.log('no') : console.log('yes');
}

var age = prompt('age: ');
while (age!='q')
{
canDrink(age);
age = prompt('age: ');
}

var z = canDrink(18);
console.log(z);
//var z = canDrink(25);

function canDrink(age)
{
  return (age>=21)
}

//console.log(z);


//ADD TAX
var q = prompt('what\'s the total: ');
q = parseFloat(q);
var e = prompt('what\'s the percent: ');
var z = addTax(q, e);
console.log(z);

function addTax(tt, tx)
{
  tx /= 100;
  tx *= tt;
  tt += tx;
  return tt;
}

//SUM UP AN ARRAY
var arr = [];
var ask = prompt('get it on: ');
while(ask!='q')
{
  ask = parseInt(ask);
  arr.push(ask);
  ask = prompt('q? ');
}
var z = sumUp(arr);
console.log(z);

function sumUp(poop)
{
  var sum = 0;
  for(var i=0; i<poop.length; i++)
  {
    sum+=poop[i];
  }
  return sum;
}

//FACTORIAL

var ask = prompt('gimme an int: ');
while (ask!='q')
{
  var z = facto(ask);
  console.log(z);
  ask = prompt('q? ');
}
 // var z = facto(0);
  //console.log(z);
 
function facto(x)
{
  var fact = 1;
  for(var i=2; i<=x; i++)
  {
    //x-=1;
    fact*=i;
    //console.log('---->' + fact);
    //x-=1;
  }
  return fact;
}


var z = prompt('z: ');
while(z!='q')
{
  var d = rollDie(z);
function rollDie(x)
{
  for(var i=1; i<=x; i++)
  {
    console.log('roll ' + i + ' is ' + Math.ceil(Math.random()*5));
  }
}

z = prompt('z: ');
}
*/

function rollDie()
{
  return Math.floor(Math.random()*6) + 1;
}
/*
  for(var i=0; i<10; i++)
  {
   z = rollDie();
   console.log('roll: ', z);
  }
*/

//var a = rollDie(), b = rollDie();
//var c = isPair(a, b);
var p;
p = countPairs(10000);
console.log(p);


function isPair(roll1, roll2)
{
  return roll1===roll2;
}

function countPairs(rolls)
{
  var count=0;
  for(var i=0; i<rolls; i++)
  {
    if(isPair(rollDie(), rollDie()))
    {
      count++;
      //console.log(count);
    }
  }

  return count;
}






























