import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e)=>{
       e.preventDefault();
       console.log(e.target.name.value);
    }
    return (
        <div className="border border-gray-300 m-5 p-5  text-center">
            <form onSubmit={handleSubmit}>
                <input className='border border-black-500 ' type="text"  name='name' placeholder='Name' />
                <br/>
                <input className='btn bg-blue-500  mt-5 p-1 rounded' type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default SimpleForm;
