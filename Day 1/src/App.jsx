import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const Button = (props) => {
  return (
    <button
      onClick={props.setCount}
      className={`text-white px-3 py-2 rounded ${
        props.color ? props.color : 'bg-slate-500'
      }`}
    >
      {props.children}
    </button>
  );
};

function App() {
  const status = true;
  const products = [
    {
      id: 1,
      title: 'Iphone',
    },
    {
      id: 2,
      title: 'Mac',
    },
    {
      id: 3,
      title: 'Mac Air',
    },
  ];
  const [count, setCount] = useState(10);
  return (
    <div className="flex gap-2">
      {status && (
        <>
          {products.map((product) => (
            <Button color="bg-blue-500" setCount={() => setCount(count + 1)}>
              {count}
            </Button>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
