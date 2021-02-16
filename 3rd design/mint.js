(function() {
  'use strict';

// var shoppinglistanime = ["naruto","deathnote","avatar","one punch man","seven deadly sins","fairy tales","full metal alchemist"];
// var shoppinglistanime = ["single","Double"];

  angular.module('Shoppinglistapp', [])
  .controller("appcontroller",appcontroller)
  .controller("displaycontroller",displaycontroller)
  .service('animelistservice',animelistservice);



  appcontroller.$inject = ['animelistservice'];

  function appcontroller(animelistservice) {
    var itemadder = this;

    itemadder.itemname = "";

    itemadder.additem = function () {
      animelistservice.additem(itemadder.itemname);
    }
  }

  displaycontroller.$inject = ['animelistservice'];

  function displaycontroller(animelistservice) {
    var showthelist = this;

    showthelist.items = animelistservice.getitems();
    }



  function animelistservice() {
    var service = this;

    var items = [];

    service.additem = function (itemname) {
      var item = {
        name : itemname
      };
      items.push(item);
    };

    service.getitems = function () {
      return items;
    }

  }
}

)();
