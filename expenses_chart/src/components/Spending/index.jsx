import React from "react";
import Container from 'react-bootstrap/Container';
import { expenses } from '../../data';
import { Chart } from "./components/Chart";
import { WrapperSpending, WrapperChart } from "./Speding.styled"; 





export function Spending() {
  return (
    <Container className='center-block container-sm'>
      <WrapperSpending>
        <h3 className="spending-title">Spending - Last 7 days</h3>
        <WrapperChart>{expenses.map((expenses, index) => <Chart key={index} {...expenses} />)}</WrapperChart>
        <div className="line"></div>
        <div className="about-month">
          <div>
            <p className="spending-text">Total this month</p>
            <p className="total-sum">$478.33</p>
          </div>
          <div>
            <p className="delta">+2.4%</p>
            <p className="spending-text">from last month</p>
          </div>
        </div>
      </WrapperSpending>
    </Container>
  )
}
