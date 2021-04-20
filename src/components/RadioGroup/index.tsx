import { useState } from 'react'
import { Container, RadioItem } from './styles'

type option = {
  key: string;
  value: string
}
interface RadioGroupProps {
  options: option[];
  onChange(key: string): void
}

export function RadioGroup({ options, onChange }: RadioGroupProps) {
  const [selected, setSelect] = useState(0);

  const handleSelect = (index) => {
    setSelect(index)
    onChange(options[index].key)
  }
  return (
    <Container>
      {options.map((option, index) => (
        <RadioItem
          key={index}
          type="button"
          active={index === selected}
          onClick={() => handleSelect(index)}
        >
          {option.value}
        </RadioItem>)
      )}
    </Container>
  )
}