const Display = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartData')) || [];
  
    return (
      <div>
        <h1>Cart Items</h1>
        
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.title} width="100" />
                <p>Title: {item.title}</p>
                <p>Price: Rs. {item.price}</p>
                <p>Category: {item.category}</p>
                <p>Description: {item.description}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
    );
  };
  
  export default Display;
  