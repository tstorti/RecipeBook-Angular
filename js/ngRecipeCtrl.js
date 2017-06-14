ngRecipes.controller('NgRecipesCtrl', function NgRecipesCtrl() {
  this.recipes = [
    { 
      val: 'Chili', 
      ingredients:["beef", "tomatoes", "onions", "garlic", "chili peppers"], 
    },
    { 
      val: 'Spaghetti', 
      ingredients:["noodles", "tomatoes"], 
    },
    { 
      val: 'Fried Chicken', 
      ingredients:["chicken", "buttermilk", "salt", "flour", "oil"], 
    }
  ];
  this.selectedIngredients =[];

  this.addNewRecipe = function() {
    this.recipes.unshift({val: this.newRecipe });
    this.newRecipe = '';
  };
  this.addNewIngredient = function(index) {
    console.log(this.newIngredient);
    this.recipes[index].ingredients.push(this.newIngredient);
    console.log(this.recipes[index].ingredients);
    this.newIngredient = '';
  };

  this.deleteRecipe = function(index) {
    this.recipes.splice(index,1);
  }
  this.expandRecipe = function(index){
    //this.selectedIngredients =[];
    //for (var i=0;i<this.recipes[index].ingredients.length;i++){
    //  this.selectedIngredients.push({val: this.recipes[index].ingredients });
    //}
    
  }
}); 