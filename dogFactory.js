/*
Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
*/

function dogFactory(name, breed, weight) {
    return {
      name: name,
      breed: breed,
      weight: weight
    };
  }
  
  // Test the function
  console.log(dogFactory('Joe', 'Pug', 27)); 
  // Should return { name: 'Joe', breed: 'Pug', weight: 27 }


/*
Add getters and setters for each of the three properties and change the property names to have an underscore prepended.
*/

function dogFactory(name, breed, weight) {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
        return this._name;
      },
      set name(newName) {
        this._name = newName;
      },
      get breed() {
        return this._breed;
      },
      set breed(newBreed) {
        this._breed = newBreed;
      },
      get weight() {
        return this._weight;
      },
      set weight(newWeight) {
        this._weight = newWeight;
      }
    };
  }
  
  // Test the function
  const dog = dogFactory('Joe', 'Pug', 27);
  console.log(dog.name); // Output: Joe
  console.log(dog.breed); // Output: Pug
  console.log(dog.weight); // Output: 27
  
  dog.name = 'Max';
  dog.breed = 'Labrador';
  dog.weight = 35;
  
  console.log(dog.name); // Output: Max
  console.log(dog.breed); // Output: Labrador
  console.log(dog.weight); // Output: 35

  
/*
Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.
*/

function dogFactory(name, breed, weight) {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
        return this._name;
      },
      set name(newName) {
        this._name = newName;
      },
      get breed() {
        return this._breed;
      },
      set breed(newBreed) {
        this._breed = newBreed;
      },
      get weight() {
        return this._weight;
      },
      set weight(newWeight) {
        this._weight = newWeight;
      },
      bark() {
        return 'ruff! ruff!';
      },
      eatTooManyTreats() {
        this._weight++;
      }
    };
  }
  
  // Test the function
  const dog = dogFactory('Joe', 'Pug', 27);
  console.log(dog.bark()); // Output: ruff! ruff!
  console.log(dog.weight); // Output: 27
  
  dog.eatTooManyTreats();
  console.log(dog.weight); // Output: 28
  