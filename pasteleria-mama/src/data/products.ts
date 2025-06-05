export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 'pastel-chocolate',
    name: 'Pastel de Chocolate',
    description: 'Delicioso pastel de chocolate con relleno de ganache y decorado con frutas frescas.',
    price: 25.99,
    imageUrl: '/images/pastel-chocolate.jpg'
  },
  {
    id: 'cupcakes-vainilla',
    name: 'Cupcakes de Vainilla',
    description: 'Cupcakes esponjosos de vainilla con frosting de crema de mantequilla y decoraciones coloridas.',
    price: 15.99,
    imageUrl: '/images/cupcakes-vainilla.jpg'
  },
  {
    id: 'tarta-frutas',
    name: 'Tarta de Frutas',
    description: 'Tarta fresca con una selección de frutas de temporada y crema pastelera casera.',
    price: 20.99,
    imageUrl: '/images/tarta-frutas.jpg'
  }
]; 