import { useEffect, useState } from 'react';
import { getProducts } from '../services/product';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlices';

const Product = () => {
  const [products, setProducts] = useState([]);
  const carts = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleAddToCart = (data) => {
    dispatch(addToCart({ id: data.id, qty: 1, title: data.title }));
  };

  return (
    <section className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-2">Product</h1>
      <div className="flex gap-2">
        <div className="grid grid-cols-2 w-2/3 gap-2">
          {products.map((product) => (
            <Card
              key={product.id}
              data={product}
              onClick={() => handleAddToCart(product)}
            />
          ))}
        </div>
        <div className="w-1/3">
          <h2>Carts</h2>
          {carts.map((cart) => (
            <div className="flex justify-between">
              <h4 className="w-2/3 truncate">{cart.title}</h4>
              <p>x{cart.qty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
