var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]

//functions in another function is called a callback function
//using filter a Higher Order Function



var isDog = function(animal) {
    return animal.species === 'dog'
}

var dogs = aninmals.filter(isDog)
var otherAnimals = animals.reject(isDog)

//the above code is breaking out the callback as a separate variable
//reject function is NOT built into JS like filter.  You'll need to use the underscore.js library to use this function


/* this is the filter function written in basic JS code using a for loop
var dogs = []
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog')
    dog.push(animals[i])
}*/

