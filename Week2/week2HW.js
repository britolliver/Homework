const pizzaPlace = "The Right Slice";
const numberOfToppings = 30;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

//print a template literal that uses both variables to construct a short sentence about your pizza place

console.log(`${pizzaPlace} offers ${numberOfToppings} different pizza toppings so that you are able to make sure that your slice is ${pizzaPlace} for you.`);

//construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings or "A whole lot of pizza." if you offer 10 or more toppings

if(numberOfToppings < 10){
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

//Bonus Challenge:
//use a loop to print ALL of the EVEN numbers from 1 to numberOfToppings(or 10)

let i = 1;

while(i <= numberOfToppings){
  if(i % 2 === 0){
    console.log(i);
  }
  i++;
}
