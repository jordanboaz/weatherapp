import styled from 'styled-components';

interface ButtonProps { active?: boolean }

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const RadioItem = styled.button<ButtonProps>`
  height: 5rem;
  width: 10rem;
  border: 1px solid #f04a1d;

  font-weight: 700;

  outline: 0;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;

  display: flex;
  cursor: pointer;

  background: ${(props) => props.active ? '#f04a1d' : 'white'};
  color: ${(props) => props.active ? 'white' : '#f04a1d'};

  transition: filter 0.2s;

  & + button {
    margin-left: 1rem;
  }

  &:hover {
    filter: brightness(1.2)
  }


`