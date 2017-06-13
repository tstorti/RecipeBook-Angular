ngRecipes.controller('NgRecipesCtrl', function NgRecipesCtrl() {
  this.recipes = [
    { val: 'Chili'},
    { val: 'Spaghetti'},
    { val: 'Fried Chicken'}
  ];

  this.addNewRecipe = function() {
    this.recipes.unshift({val: this.newRecipe });
    this.newRecipe = '';
  };

  this.deleteRecipe = function(index) {
    this.recipes.splice(index,1);
  }
}); 