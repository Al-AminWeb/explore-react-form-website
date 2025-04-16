import React from 'react';
import useInputField from "../../hooks/UseInputField.jsx";

const HookForm = () => {
    const [name,nameOnChange] = useInputField('')
    const handleSubmit =e =>{
        e.preventDefault();
        console.log('submit',name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange}/>
                <br/>
                <input type="submit" value='submit' />
            </form>
        </div>
    );
};

export default HookForm;
