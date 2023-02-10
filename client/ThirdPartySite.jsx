import { useState } from 'react';
import axios from 'axios';
import './ThirdPartySite.scss';

const ThirdPartySite = () => {
  const [email, setEmail] = useState('');

  const handleEmailInput = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      //axios post request to localhost:3000/api to save record
      const response = await axios.post('http://localhost:3000/api', {
        email,
      });

      //then redirect to application component with info
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='form-container'>
      <form className={'third-party-form'} onSubmit={handleEmailSubmit}>
        <label>
          Email
          <input type='email' value={email} onChange={handleEmailInput} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default ThirdPartySite;
