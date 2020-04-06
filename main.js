"use strict";

//Renders coffee cards and put html tags on them
function renderCoffee(coffee) {
    var html = '<div class="card border-white align-items-center">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<h6>' + coffee.name + '</h6>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

//Renders coffee cards by coffee ID number in ascending order. Displays it below the ID "coffees"
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var selectedRoast = null;

//This is the drop-down row selection
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast) || (selectedRoast === "all") ) {
            filteredCoffees.push(coffee);

        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// converts keyed-in coffee names to lowercase, matches them to the id "coffee-name"
function keyCoffee() {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        if(coffees[i].name.toLowerCase().includes(document.getElementById('coffee-name').value.toLowerCase()) && (selectedRoast === coffees[i].roast)) {
            console.log(coffees.name);
            html += renderCoffee(coffees[i]);
        }
        tbody.innerHTML = html;
    }
    return html;
}





//adds DOM event when keying in coffee name
document.getElementById('coffee-name').addEventListener('keyup', keyCoffee);

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#first-submit');

// (top) adds DOM event when the dropdown button is changed/clicked
var roastSelection = document.querySelector('#roast-selection-top');
roastSelection.addEventListener('change', updateCoffees);

tbody.innerHTML = renderCoffees(coffees);

//adds DOM event when clicking on the submit button
submitButton.addEventListener('submit', updateCoffees);

////----------------------------
//Below we are trying to create a function that pushes a new coffee into the coffees array

// (bottom) adds DOM event when the dropdown button is changed/clicked
// var roastSelection = document.querySelector('#roast-selection-bottom');
// roastSelection.addEventListener('change', updateCoffees);
//

//example of push to array
// function addACoffee(){
//     newcoffee = document.getElementById('coffee-name').value;
//     coffees.push(newcoffee);
//     console.log(coffees);
// }
//

function addACoffee(){
    // newcoffeename = document.getElementById('coffee-name').value;
    // newcoffeeroast = document.getElementById('roast-selection-bottom').value;
    // newcoffeeid = coffees.length + 1;
    var newCoffee = {
        id: coffees.length + 1,
        name: document.getElementById('coffee-name').value,
        roast: document.getElementById('roast-selection-bottom').value
    };
    coffees.push(newCoffee);
    console.log(coffees);
}
addACoffee();

// function updateCoffeeArray() {
//     var newCoffeeObject = {
//         name : ,
//         roast: ,
//         id:
//     };
//
//     coffees.push({
//
//     }
// });

// var tbody = document.querySelector('#coffees');
// var bottomSubmitButton = document.querySelector('#second-submit');