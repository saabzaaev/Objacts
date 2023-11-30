// Task-1

function multipling(size)
{
  let {width , length , height} = size
  return width * length * height
}
console.log(multipling({width: 4,length: 2,height: 2,}));

// Task-2
function procent(num)
{
let dividing = 
{
    Needs: 0.5 * num,
    Wants: 0.3* num,
    Savings: 0.1 * num
}
return dividing
}
console.log(procent(10000));

// Task-3
function getRelationToLuke(name) {
  const relations = {
      "Darth Vader": "father",
      "Leia": "sister",
      "Han": "brother in law",
      "R2D2": "droid"
  };

  return relations[name] || "fraind";
}
console.log(getRelationToLuke("Leia"));

// Example usage:
console.log(getRelationToLuke("Darth Vader")); // Output: "father"
console.log(getRelationToLuke("Leia")); // Output: "sister"
console.log(getRelationToLuke("Han")); // Output: "brother in law"
console.log(getRelationToLuke("R2D2")); // Output: "droid"
console.log(getRelationToLuke("Yoda")); // Output: "friend"


// Task-4
function cityFacts(city) {
  const cityName = city.name;
  const cityPopulation = city.population;
  const cityContinent = city.continent;

  return `${cityName} has a population of ${cityPopulation} and is situated in ${cityContinent}`;
}

// Example usage:
const cityData = {
  name: "Tokyo",
  population: "13,515,271",
  continent: "Asia"
};

console.log(cityFacts(cityData)); // Output: Tokyo has a population of 13,515,271 and is situated in Asia

