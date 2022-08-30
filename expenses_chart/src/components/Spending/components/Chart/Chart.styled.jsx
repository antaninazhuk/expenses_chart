import styled from 'styled-components';

export const WrapperColumn = styled.div`
  
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center; 

& .column {
  border-radius: 4px;
  background-color: #ea745e;
  width: 42px;
}

& .column:hover {
  cursor: pointer;
}

& .active-column {
  background-color: #76b5bc;
}

& .amount {
  margin-bottom: 5px;
  font-size: 12px;
  opacity: 0;
}

& .active-amount {
  opacity: 1;  

}

& .day {
  margin: 2px 0 0;
  font-size: 12px;
  color: #93867b;
}
`
