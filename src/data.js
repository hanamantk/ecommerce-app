const path = "../../images/";
const products = [
  {
    id: 1,
    name: "Banana",
    img: `${path}banana.jpeg`,
    inStock: true,
    price: 24,
    selectedQty:0
  },
  { id: 2, name: "Cashew", img: `${path}cashew.png`, inStock: true, price: 90,selectedQty:0 },
  { id: 3, name: "Mango", img: `${path}mango.jpg`, inStock: true, price: 60,selectedQty:0 },
  {
    id: 4,
    name: "Mixed Fruite",
    img: `${path}mixed.jpg`,
    inStock: true,
    price: 70,
    selectedQty:0
  },
  { id: 5, name: "Onion", img: `${path}onion.jpg`, inStock: true, price: 80,selectedQty:0 },
  { id: 6, name: "Tomato", img: `${path}tomato.jpg`, inStock: true, price: 25,selectedQty:0}
];

export default products;
