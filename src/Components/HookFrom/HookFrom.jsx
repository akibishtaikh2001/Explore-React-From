import React from 'react';
import useInputField from '../../hooks/UseInputField';

const HookFrom = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name, email);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
              <input defaultValue={name} type="text" onChange={nameOnChange} />  
              <br />
              <input type="email" defaultValue={email} onChange={emailOnChange} name="" id="" />
              <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookFrom;