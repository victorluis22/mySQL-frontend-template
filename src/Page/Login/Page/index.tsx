// React
import React from 'react';

import { Formik } from 'formik'
import * as yup from 'yup'
import { api } from '../../../App';

// Native Components
import { Container, Title } from './style';
import FormLoginTemplate from '../Template/FormLoginTemplate';

// @Types
import { LoginProps } from './types';

const Login: React.FC<LoginProps> = ({}) => {

    const handleClickLogin = (values: any) => {
        api.post(`/login`, {
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

    const validationLogin = yup.object().shape({
        email: yup
            .string()
            .email("Não é um email")
            .required("Este campo é obrigatório"),

        password: yup
            .string()
            .min(8, "A senha deve ter 8 caracteres")
            .required("Este campo é obrigatório"),
    })

  return (
    <Container>
        <Title>Login</Title>

        <Formik 
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={handleClickLogin}
            validationSchema={validationLogin}
        >
            <FormLoginTemplate />
        </Formik>
    </Container>
);
}

export default Login;