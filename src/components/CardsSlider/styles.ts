import styled from 'styled-components'

interface ContainerProps {
  numCards: number;
}

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
 display: grid;
 gap: 2rem;

 @media (min-width: 501px) {
  grid-template-columns: 0.4fr ${(props) => `repeat(${props.numCards}, 1fr)`} 0.4fr;
 }

 @media (max-width: 500px) {
  grid-template-rows: 0.4fr ${(props) => `repeat(${props.numCards}, 1fr)`} 0.4fr;
 }
`

export const Arrow = styled.button<ButtonProps>`
  background: transparent;
  outline: 0;
  border: 0;

  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};

  svg {
    height: 4rem;
    width: 4rem;
    color:  #a8a8b3;

     &:hover {
      color: #f04a1d;
      height: 4.5rem;
      width: 6rem;
    }
  }

`