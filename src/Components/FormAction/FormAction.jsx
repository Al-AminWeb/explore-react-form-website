import React from 'react';

const FormAction = () => {
    const handleFormAction = (formData) => {
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }
    return (
        <div>
            <form action={handleFormAction}>
                <input className='border border-black-500 m-5' type="text" name='name' placeholder="name"/><br/>
                <input className='border border-black-500 m-5' type="text" name="email" placeholder="email"/><br/>
                <input className='btn bg-blue-500  m-5 p-1 rounded' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;
