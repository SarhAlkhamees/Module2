(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ShoppingListCheckOffController1', ShoppingListCheckOffController1)
    .controller('ShoppingListCheckOffController2', ShoppingListCheckOffController2)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // ToBuyController
  ShoppingListCheckOffController1.$inject = ['ShoppingListCheckOffService'];

  function ShoppingListCheckOffController1(ShoppingListCheckOffService) {
    var ToBuyList = this;
    ToBuyList.items = ShoppingListCheckOffService.getToBuyList();

    ToBuyList.ToBuyItem = function (itemIndex) {
      ShoppingListCheckOffService.ToBuyItem(itemIndex);
    };
  }

  // AlreadyBoughtController
  ShoppingListCheckOffController2.$inject = ['ShoppingListCheckOffService'];

  function ShoppingListCheckOffController2(ShoppingListCheckOffService) {
    var AlreadyBoughtList = this;

    AlreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtList();
  }



  function ShoppingListCheckOffService() {
    var service = this;

    // To Buy list
    var ToBuyList = [
      { name: "cookies", quantity: 10 },
      { name: "Donuts", quantity: 20 },
      { name: "Chocolate", quantity: 30 },
      { name: "eggs", quantity: 40 },
      { name: "Sugar", quantity: 50 }
    ];

    // Already Bought list
    var AlreadyBoughtList = [];

    service.ToBuyItem = function (itemIndex) {
      var item = ToBuyList[itemIndex];
      AlreadyBoughtList.push(item);
      ToBuyList.splice(itemIndex, 1);
    };
    service.getToBuyList = function () {
      return ToBuyList;
    };

    service.getAlreadyBoughtList = function () {
      return AlreadyBoughtList;
    };
  }
})();
