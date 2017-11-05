angular.module('myApp', []);

angular.module('myApp')
.controller('myController', function ($scope) {
  $scope.inventory = [
    { id: 1, category: "Belts", image: "images/belts.jpg", description: "A belt is a flexible band or strap,  A belt supports trousers or other articles of clothing. It is an item of accessory", price: 12.99, qty: 1 },
    { id: 2, category: "Tie", image: "images/Tie.jpg", description: "A necktie, or simply a tie, is a long piece of cloth worn by men - ", price: 45.99, qty: 1, onSale: true },
    { id: 3, category: "Shirts", image: "images/Shirt.jpg", description: "A shirt is a cloth garment for the upper body", price: 15.99, qty: 1 },
    { id: 4, category: "Scarf", image: "images/Scarf.jpg", description: "A scarf, plural scarves, is a piece of fabric worn around the neck for warmth. It is a common type of neckwear", price: 45.99, qty: 1 },
    { id: 5, category: "Jeans", image: "images/jeansnew.jpg", description: "Jeans are a type of pants,typically made from denim or dungaree cloth. Often the term ", price: 45.99, qty: 1 }
];
  
  $scope.cart = [];
  
  var findItemById = function(items, id) {
    return _.find(items, function(item) {
      return item.id === id;
    });
  };
  
  $scope.addItem = function(item) {
    var foundItem = findItemById($scope.cart, item.id);
    if (foundItem) {
      foundItem.qty += item.qty;
    }
    else {
      $scope.cart.push(angular.copy(item));
    }
  };

  
  
});