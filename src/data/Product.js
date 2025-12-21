import latte from "../assets/img/Menu/latte.jpeg"
import cappucino from "../assets/img/Menu/cappucino.jpg"
import expresso from "../assets/img/Menu/expresso.jpg"
import croissant from "../assets/img/Menu/croissant.jpg"
import chocolat from "../assets/img/Menu/painchocolat.jpg"
import muffin from "../assets/img/Menu/muffin.jpg"

const products = [
    {
      id: 'coffee-espresso',
      name: 'Эспрессо',
      description: 'Маленькая порция крепкого итальянского кофе',
      price: 2.5,
      category: 'coffee',
      image: expresso,
    },
    {
      id: 'coffee-latte',
      name: 'Латте',
      description: 'Нежный кофе с молоком и тонкой пенкой',
      price: 3.5,
      category: 'coffee',
      image: latte,
    },
    {
      id: 'coffee-cappuccino',
      name: 'Капучино',
      description: 'Итальянский кофе с молочной пенкой',
      price: 3.2,
      category: 'coffee',
      image: cappucino,
    },
    {
      id: 'pastry-croissant',
      name: 'Круассан',
      description: 'Свежий французский круассан из слоёного теста',
      price: 2.0,
      category: 'pastry',
      image: croissant,
    },
    {
      id: 'pastry-pain-au-chocolat',
      name: 'Пен-о-шоколад',
      description: 'Слоёная булочка с шоколадом внутри',
      price: 2.3,
      category: 'pastry',
      image: chocolat,
    },
    {
      id: 'pastry-muffin',
      name: 'Маффин с черникой',
      description: 'Домашний маффин с лесной черникой',
      price: 2.8,
      category: 'pastry',
      image: muffin ,
    },
  ];
  
  export default products;
  