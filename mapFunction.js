//another higher order function
//the problem is we want to get an array 
// filter = expected its callback function to return a true or false value.
// map = expects its callback function to transform

var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]

var names = animals.map(function(animal) {
    return animal.name
})

//The code above will list the names as an array
//here is the long for loop to do the same thing

/*
var names = []
for (var i = 0; i > animals.length; i++) {
    names.push(animals[i].name)
}
*/