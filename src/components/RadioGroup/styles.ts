import styled from 'styled-components';

interface ButtonProps { active?: boolean }

export const Container = styled.div`
  /* margin: 1rem 0; */
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem; */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  

`

export const RadioItem = styled.button<ButtonProps>`
  height: 5rem;
  width: 10rem;
  border: 1px solid #d7d7d7;

  font-weight: 700;

  outline: 0;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;

  display: flex;
  cursor: pointer;

  background: ${(props) => props.active ? '#0e7bf0' : 'white'};

  transition: filter 0.2s;

  & + button {
    margin-left: 1rem;
  }

  &:hover {
    filter: brightness(0.9)
  }


`