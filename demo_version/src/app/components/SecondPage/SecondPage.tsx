import React from 'react';
import bk from "../SecondPage/hatter.png";

const SecondPage = () => {
  return (
    <div
      id="secondPage" 
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bk.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
    </div>
  );
};

export default SecondPage;
