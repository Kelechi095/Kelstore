import React from 'react'
import Wrapper from '../components/Wrapper'
import FormWrapper from '../components/FormWrapper'
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <Wrapper>
        <FormWrapper>
            <RegisterForm />
        </FormWrapper>
    </Wrapper>
  )
}

export default Register