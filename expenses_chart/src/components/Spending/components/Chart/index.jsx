import React, { useState } from 'react';
import { WrapperColumn } from './Chart.styled';


export function Chart(expenses) {
  const { amount, day} = expenses;
  const [isActive, setIsActive] = useState(false);

  function mouseEnterHandle() {
    setIsActive((current) => !current);
  }


  return (
    <WrapperColumn>      
          <p className={`amount ${isActive ? "active-amount" : ""}`}>${amount}</p>
          <div 
          className={`column ${isActive ? "active-column" : ""}`}
          style={{height: amount*3 + 'px'}}
          onMouseOver={mouseEnterHandle}
          onMouseOut={mouseEnterHandle}>                          
          </div>
          <p className='day'>{day}</p>         
    </WrapperColumn>
  );
}
