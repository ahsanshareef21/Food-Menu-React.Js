// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [items, setItems] = useState([
//     { id: 1, name: "Burger", price: 50, isChecked: false, quantity: 0 },
//     { id: 2, name: "Pizza", price: 750, isChecked: false, quantity: 0 },
//     { id: 3, name: "Fries", price: 50, isChecked: false, quantity: 0 },
//     { id: 4, name: "Sprite", price: 120, isChecked: false, quantity: 0 },
//   ]);

//   const [totalPrice, setTotalPrice] = useState(0);
//   const [discount, setDiscount] = useState(0);

//   const addPrice = () => {
//     const selectedItems = items.filter((item) => item.isChecked);
//     const selectedTotalPrice = selectedItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//     const discountedPrice =
//       selectedTotalPrice - (selectedTotalPrice * discount) / 100;
//     setTotalPrice(discountedPrice);
//   };

//   const handleCheckbox = (id) => {
//     const updatedItems = items.map((item) =>
//       item.id === id ? { ...item, isChecked: !item.isChecked } : item
//     );
//     setItems(updatedItems);
//   };

//   const handleQuantityChange = (id, value) => {
//     const updatedItems = items.map((item) =>
//       item.id === id ? { ...item, quantity: item.quantity + value } : item
//     );
//     setItems(updatedItems);
//   };

//   const handleDiscountChange = (event) => {
//     setDiscount(Number(event.target.value));
//   };

//   return (
//     <div>
//       <div className="head">
//         <h3>Food Menu</h3>
//       </div>
//       <div>
//         <h3>Item Name - Price - Quantity</h3>
//       </div>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <input
//               type="checkbox"
//               checked={item.isChecked}
//               onChange={() => handleCheckbox(item.id)}
//             />
//             {item.name} = RS {item.price} /={" "}
//             <button onClick={() => handleQuantityChange(item.id, -1)}>
//               <h2> - </h2>
//             </button>
//             {item.quantity}
//             <button onClick={() => handleQuantityChange(item.id, 1)}>
//               <h2> + </h2>
//             </button>
//           </li>
//         ))}
//         <li>
//           <label>
//             Discount (%):
//             <input
//               type="number"
//               value={discount}
//               onChange={handleDiscountChange}
//             />
//           </label>
//         </li>
//       </ul>
//       <div>
//         <button onClick={addPrice}>Add Price</button>
//       </div>
//       <div>
//         <h3>Total Price: {totalPrice}</h3>
//       </div>
//     </div>
//   );
// };

// export default App;

//🧡🧡 we will Give Manulay Discount to Each Item 

import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Burger",
      price: 50,
      isChecked: false,
      quantity: 0,
      discount: 0,
    },
    {
      id: 2,
      name: "Pizza",
      price: 750,
      isChecked: false,
      quantity: 0,
      discount: 0,
    },
    {
      id: 3,
      name: "Fries",
      price: 50,
      isChecked: false,
      quantity: 0,
      discount: 0,
    },
    {
      id: 4,
      name: "Sprite",
      price: 120,
      isChecked: false,
      quantity: 0,
      discount: 0,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const addPrice = () => {
    const selectedItems = items.filter((item) => item.isChecked);
    const selectedTotalPrice = selectedItems.reduce(
      (total, item) =>
        total + item.price * item.quantity * (1 - item.discount / 100),
      0
    );
    setTotalPrice(selectedTotalPrice);
  };

  const handleCheckbox = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setItems(updatedItems);
  };

  const handleQuantityChange = (id, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + value } : item
    );
    setItems(updatedItems);
  };

  const handleDiscountChange = (id, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, discount: value } : item
    );
    setItems(updatedItems);
  };

  return (
    <div>
      <div className="head">
        <h3>Food Menu</h3>
      </div>
      <div>
        <h3>Item Name - Price - Quantity - Discount (%)</h3>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleCheckbox(item.id)}
            />
            {item.name} = RS {item.price} /={" "}
            <button onClick={() => handleQuantityChange(item.id, -1)}>
              <h2> - </h2>
            </button>
            {item.quantity}
            <button onClick={() => handleQuantityChange(item.id, 1)}>
              <h2> + </h2>
            </button>
            <input
              type="number"
              value={item.discount}
              onChange={(e) => handleDiscountChange(item.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <div>
        <button onClick={addPrice}>Add Price</button>
      </div>
      <div>
        <h3>Total Price: {totalPrice}</h3>
      </div>
    </div>
  );
};

export default App;
