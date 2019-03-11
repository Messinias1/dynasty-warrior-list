var storeName = "Felicia's Fruit Stand";
var motto = "Buy Felicia!";

var fruit = ["Apple", "Orange", "Peach", "Grapefruit"];
var price = [1.00, 1.50, 1.75, 2.00];

var readline = require("readline-sync");
var fruitMenuDisplay = readline.question("Hello!, welcome to Felicia's Fruit Stand! ");
console.log("We have ", fruit[0] + "'s,", fruit[1] + "'s,", fruit[2] + "'s, and", fruit[3] + "'s");

 readline = require("readline-sync");
var selection = readline.question("What would you like to purchase? ");

 readline = require("readline-sync");
var quantity = readline.question("Ok and how many would you like to purchase? ");

if (quantity == 1)
    if (selection === 'Apple') {
        console.log('Thank You, you orderded', quantity, fruit[0], "and it will be", quantity * price[0]);
    }
else if (selection === 'Orange') {
    console.log('Thank You, you oredered', quantity, fruit[1], "and it will be", quantity * price[1]);
}
else if (selection === 'Peach') {
    console.log('Thank you, you ordered', quantity, fruit[2], "and it will be", quantity * price[2]);
}
else if (selection === 'Grapefruit') {
    console.log('Thank you, you ordered', quantity, fruit[3], "and it will be", quantity * price[3]);
}
else { 
    if (selection === 'Apple') {
        console.log('Thank You, you orderded', quantity, fruit[0], "and it will be", price[0] * quantity);
    }
    else if (selection === 'Orange') {
        console.log('Thank You, you oredered', quantity, fruit[1], "and it will be", price[1] * quantity);
    }
    else if (selection === 'Peach') {
        console.log('Thank you, you ordered', quantity, fruit[2], "and it will be", price[2] * quantity);
    }
    else if (selection === 'Grapefruit') {
        console.log('Thank you, you ordered', quantity, fruit[3], "and it will be", price[3] * quantity);

    }
}