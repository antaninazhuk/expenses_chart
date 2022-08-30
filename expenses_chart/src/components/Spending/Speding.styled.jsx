import styled from "styled-components";

export const WrapperSpending = styled.div`
    background-color: #fff;
    max-width: 450px;
    margin: auto;
    border-radius: 10px;
    padding: 20px 25px;

    & .spending-title {
        font-size: 24px;
        font-weight: bold;
        color: #382314;
    }

    & .line {
        max-wight: 100%;
        height: 1px;
        background-color: #f8e9dd;
        margin: 20px 0;
    }

    & .about-month {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;  
        margin: 0 0 5px;  
    }

    & .spending-text {
        font-size: 12px;
        color: #93867b;
        margin: 0;          
    }
   
    & .total-sum {
        font-size: 32px;
        font-weight: bold;
        margin: 0;
        color: #382314;
          
    }

    & .delta {
        font-size: 12px;
        font-weight: bold;
        color: #382314;
        margin: 0;
        text-align: right;
    }
`

export const WrapperChart = styled.div`
    display: flex;
    justify-content: space-between;     
`