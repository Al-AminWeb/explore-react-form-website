import React, {useState} from 'react';

const ProductForm = ({handleAddProduct}) => {

    const [error,setError] = useState('');
    const handleProductSubmit = e =>{
        e.preventDefault();
       const name = e.target.name.value;
       const price = e.target.price.value;
       const quantity = e.target.quantity.value;

        if (name.length === 0) {
            setError('Please provide a product name');
            return;
        }
        else if (price.length === 0) {
            setError('Please provide a price');
            return;
        }
        else if (price < 0) {
            setError('Price can not be negative');
            return;
        }
        else {
            setError('');
        }


        const newProduct = {
            name,
            price,
            quantity
        }
        handleAddProduct(newProduct);
    }




    return (
        <div className='flex flex-col justify-center items-center border border-blue-800 '>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input className='border border-black-500 m-5 p-1 text-center ' type="text"  name='name' placeholder='Name' />
                <br/>
                <input className='border border-black-500 m-5 p-1 text-center' type="text"  name='price' placeholder='Price' />
                <br/>
                <input className='border border-black-500 m-5 p-1 text-center' type="text"  name='quantity' placeholder='Quantity' />
                <br/>
                <input className='btn bg-blue-500  m-5 p-1 rounded' type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;
