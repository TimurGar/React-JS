// map method runs a function (inside map) for each element in the array and
// creates a new array with the results of function

const nums = [1,2,3,4,5];
const squaredNums = nums.map(function (item) {
    return item * item
});
console.log(squaredNums)

const names = ["bob", "charles", "lora", "ben"]
// () => {} -- shorter way for "function() {}"
const capitalNames = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})
console.log(capitalNames)

const pokemon = ["Bulbausaur", "Charamander", "Squirtle"]
const htmlPokemon = pokemon.map(pokemon => `<p>${pokemon}</p>`)
    // "<p>" + pokemon + "</p>" -- works too

console.log(htmlPokemon)
