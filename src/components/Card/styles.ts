import styled from 'styled-components';

interface ButtonProps {
  active: boolean;
}
export const Container = styled.button<ButtonProps>`
  flex: 1;
  display: flex;
  outline: 0;
  border: 1 solid;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 1rem;
  padding: 1rem;
  background: ${(props) => props.active ? '#f04a1d' : 'white'};
  color: ${(props) => props.active ? 'white' : '#f04a1d'};
  border-color: var(--orange-500);

  h1 {
      font-weight: bold;
      font-size: 3rem;
    }

  h2 {
    margin-bottom: 1rem;
  }

  h3 {
      margin-top: 1rem;
      font-weight: 600;
    }


  section {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 0;

   

    
   
    div {
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    h4 {
      font-weight: 400;
      
    }

    p {
      font-weight: 600;
      margin-top: 0.2rem;
    }

   
  }


`
