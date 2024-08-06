import { useState } from 'react';
import './App.css';

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (product) => (
    setCart([...cart, product])
  )

  return (
    <div className="App">
      <h1>Mini sistema de Compras</h1>
      <ProductList addToCart = {addToCart} />
    </div>
  );
}

export default App;
