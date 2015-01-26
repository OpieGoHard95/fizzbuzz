// Code written by Jared Smith
// Fizzbuzz problem
// prints out numbers from 1 to 100 and then fizz for divisble by 3
// and buzz for divisble by 5
// Last work on the problem was on Friday
for (var number = 1; number <= 100; number++) {
  if (number % 3 == 0 && number % 5 == 0)
    console.log("fizzbuzz");
  else if (number % 3 == 0)
    console.log("fizz");
  else if (number % 5 == 0)
    console.log("buzz");
  else console.log(number);
}

