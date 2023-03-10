import { useState } from 'react';
import './Application.scss';

const Application = () => {
  const [email, setEmail] = useState('');

  const handleEmailInput = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) throw new Error();
    try {
      axios
        .post('localhost:3000/api', {
          email,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
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

export default Application;
