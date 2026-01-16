import latte from "../assets/img/Menu/latte.jpeg"
import cappucino from "../assets/img/Menu/cappucino.jpg"
import expresso from "../assets/img/Menu/expresso.jpg"
import croissant from "../assets/img/Menu/croissant.jpg"
import chocolat from "../assets/img/Menu/painchocolat.jpg"
import muffin from "../assets/img/Menu/muffin.jpg"

const products = [
  {
    id: 'coffee-espresso',
    name: 'Espresso',
    description: 'Petite tasse de café italien intense',
    price: 2.5,
    category: 'coffee',
    image: expresso,
  },
  {
    id: 'coffee-latte',
    name: 'Latte',
    description: 'Café doux au lait avec une mousse légère',
    price: 3.5,
    category: 'coffee',
    image: latte,
  },
  {
    id: 'coffee-cappuccino',
    name: 'Cappuccino',
    description: 'Café italien à la mousse de lait onctueuse',
    price: 3.2,
    category: 'coffee',
    image: cappucino,
  },
  {
    id: 'pastry-croissant',
    name: 'Croissant',
    description: 'Croissant français frais en pâte feuilletée',
    price: 2.0,
    category: 'pastry',
    image: croissant,
  },
  {
    id: 'pastry-pain-au-chocolat',
    name: 'Pain au chocolat',
    description: 'Viennoiserie feuilletée garnie de chocolat',
    price: 2.3,
    category: 'pastry',
    image: chocolat,
  },
  {
    id: 'pastry-muffin',
    name: 'Muffin aux myrtilles',
    description: 'Muffin maison aux myrtilles sauvages',
    price: 2.8,
    category: 'pastry',
    image: muffin,
  },
];

export default products;
