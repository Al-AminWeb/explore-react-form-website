import React from 'react';

const ProductForm = () => {

    const handleProductSubmit = e =>{
        e.preventDefault();
       const name = e.target.name.value;
       const price = e.target.price.value;
       const quantity = e.target.quantity.value;

        const newProduct = {
            name,
            price,
            quantity
        }
        console.log(newProduct);
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
        </div>
    );
};

export default ProductForm;
