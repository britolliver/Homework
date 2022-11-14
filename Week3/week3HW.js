
// Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["spinach", "sausage", "tomatoes", "peppers"];

//BONUS CHALLENGE #9
const listToppings = (toppings) => {
  let toppingsOnSameLine = "";
  for (i=0;i < toppings.length; i++) {
    if(toppings[i] === toppings[toppings.length - 2]){
        toppingsOnSameLine += toppings[toppings.length - 2].concat(" and ");
    } else if(toppings[i] === toppings[toppings.length - 1]){
        toppingsOnSameLine += toppings[toppings.length - 1].concat(".");
    } else {
        toppingsOnSameLine += toppings[i] + ", ";
    }
  }

  return toppingsOnSameLine;
}

// Create a greetCustomer function

function greetCustomer () {
  console.log(`Welcome to the Right Slice, our toppings are: ${listToppings(pizzaToppings)}`);
}

// Create a getPizzaOrder function

function getPizzaOrder(size,crust,...toppings) {
  if (toppings.length === 0){
    console.log(`One ${size} ${crust} crust pizza coming up!`);
  } else {
    console.log(`One ${size} ${crust} crust pizza with ${listToppings(toppings)} coming up!`);
  }


  return [size,crust,toppings];
}

// Create a preparePizza function

function preparePizza([size, crust, toppings]) {
  console.log(`...Your pizza is being cooked..`);
  const pizza = {
    size: size,
    crust: crust,
    toppings: toppings
  }
  return pizza;
}

// Create a servePizza function

const servePizza = (pizza) => {
  if(pizza.toppings.length === 0) {
    console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza. Enjoy!`);
  } else {
    console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${listToppings(pizza.toppings)}. Enjoy!`);
    console.log(pizza.toppings);
  }

  return pizza;
}

greetCustomer();
servePizza(preparePizza(getPizzaOrder("small","cheese","sausage","spinach","peppers")));



//BONUS CHALLENGE #11 TBD
//Work on understanding rest parameter
