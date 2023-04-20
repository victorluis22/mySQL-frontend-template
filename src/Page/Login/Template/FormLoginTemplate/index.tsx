// React
import React from 'react';

// Native Components
import { Button, Container } from './style';
import InputComponent from '../../Components/InputComponent';

// @Types
import { FormLoginTemplateProps } from './types';

const FormLoginTemplate: React.FC<FormLoginTemplateProps> = ({}) => {
  return (
    <Container>
      <InputComponent name='email' placeholder='Email' />
      <InputComponent name='password' placeholder='Senha'/>

      <Button type='submit'>Enviar</Button>
    </Container>
);
}

export default FormLoginTemplate;