import React from 'react';

import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };

  return (
    <React.Fragment>
      <button style={{ width: '200px', height: '50px' }} onClick={handleClick}>
        go home
      </button>
    </React.Fragment>
  );
}
