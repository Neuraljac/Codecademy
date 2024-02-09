let menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal === true && this._price === true) {
        return `Today's Special is ${meal} for ${price}!`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  };
  
  //menu._meal = 77;
  //menu._price = 'seventy-seven'
  