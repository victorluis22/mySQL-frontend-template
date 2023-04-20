// React
import React from 'react';

// Native Components
import { Button, Container } from './style';
import InputComponent from '../../Components/InputComponent';

// @Types
import { FormCadastroTemplateProps } from './types';

const FormCadastroTemplate: React.FC<FormCadastroTemplateProps> = ({}) => {
  return (
    <Container>
      <InputComponent name='nome' placeholder='Nome' />
      <InputComponent name='email' placeholder='Email' />
      <InputComponent name='password' placeholder='Senha' />
      <InputComponent name='confirmPassword' placeholder='Confirmar Senha' />

      <Button type='submit'>Enviar</Button>
    </Container>
);
}

export default FormCadastroTemplate;