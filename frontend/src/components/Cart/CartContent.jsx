import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContent = () => {
    const cartProducts = [
    { id: 1, name: 'Product 1',size:'M', color: "Red", price: 29.99, quantity: 2, image: "https://picsum.photos/200?random=1" },
    { id: 2, name: 'Product 2',size:'L', color: "blue", price: 49.99, quantity: 1, image: "https://picsum.photos/200?random=2" },
    { id: 3, name: 'Product 3',size:'S', color: "green", price: 19.99, quantity: 3, image: "https://picsum.photos/200?random=3" },    
    ]; 
  return (
    <div>
        {cartProducts.map((product, index) =>(
            <div key={index} className='flex items-start justify-between py-4 border-b'> 
            <div className="flex items-start">
                <img 
                src={product.image} 
                alt={product.name} 
                className='w-20 h-20 object-cover mr-4 rounded'/>
                <div> 
                    <h3>{product.name}</h3>
                    <p className='text-sm text-gray-500'>
                        size:{product.size} | color: {product.color}
                    </p>
                    <div className="flex items-center mt-2">
                        <button className=' rounded px-2 py-1 text-xl font-medium'>-</button>
                        <span className="mx-4">{product.quantity}</span>
                        <button className=' rounded px-2 py-1 text-xl font-medium'>+</button>
                    </div>
                </div>
            </div>
            <div>
                <p>${product.price.toLocaleString()}</p>
                <button>
                    <RiDeleteBin3Line className='h-5 w-5 mt-2 text-red-700'/>
                </button>
            </div>
            </div>
        ))}
    </div>
  )
}

export default CartContent