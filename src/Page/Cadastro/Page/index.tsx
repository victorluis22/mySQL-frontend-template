// React
import React from 'react';


// Library imports
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios';

// Native Components
import { Container, Title } from './style';
import FormCadastroTemplate from '../Template/FormCadastroTemplate';

// @Types
import { CadastroProps } from './types';

import { api } from '../../../App';

const Cadastro: React.FC<CadastroProps> = ({}) => {

    const handleClickCadastro = (values: any) => {
        api.post(`/cadastro`, {
            name: values.nome,
            email: values.email,
            password: values.password
        })
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const validationCadastro = yup.object().shape({
        nome: yup
            .string()
            .required("Este campo é obrigatório"),
        email: yup
            .string()
            .email("Não é um email")
            .required("Este campo é obrigatório"),
        password: yup
            .string()
            .min(8, "A senha deve ter 8 caracteres")
            .required("Este campo é obrigatório"),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("password")], "As senhas não são iguais")
    })

  return (
    <Container>
        <Title>Cadastro</Title>

        <Formik 
            initialValues={{
                email: '',
                password: '',
                nome: '',
                confirmPassword: ''
            }}
            onSubmit={handleClickCadastro}
            validationSchema={validationCadastro}
        >
            <FormCadastroTemplate />
        
        </Formik>
    </Container>
);
}

export default Cadastro;