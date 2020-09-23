import $ from 'jquery';
import api from './api'
import 'normalize.css';
import './index.css';
import store from './store';
import shoppingList from './shopping-list';



  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  
  });
  console.log(store.items);

  
const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
