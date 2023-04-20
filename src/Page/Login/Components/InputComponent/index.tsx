// React
import React from 'react';

// Native Components
import { Container, ErrorText, TextField } from './style';

// @Types
import { InputComponentProps } from './types';

const InputComponent: React.FC<InputComponentProps> = ({name, placeholder}) => {
  return (
    <Container>
        <TextField 
          name={name} 
          placeholder={placeholder}
        />

        <ErrorText
          component="span"
          name={name}
        />
    </Container>
);
}

export default InputComponent;