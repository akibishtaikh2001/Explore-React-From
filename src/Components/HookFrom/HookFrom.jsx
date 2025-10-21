import React from 'react';
import useInputField from '../../hooks/UseInputField';

const HookFrom = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
              <input defaultValue={name} type="text" onChange={nameOnChange} />  
              <br />
              <input type="email"  onChange={emailOnChange} name=""  />
              <br />
              <input type="password" name="" onChange={passwordOnChange} />
              <br />
              <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookFrom; 