import React, { useState } from 'react'
import { Container } from './Container'
import { Formik, Form, Field } from 'formik'

import logo from '../assets/logo.png'

interface Props {
  setUser: Function
}

interface loginForm {
  username: string
  password: string
}

interface signUpForm {
  email: string
  username: string
  password: string
}

export const LoginScreen: React.FC<Props> = ({
  setUser,
}): React.ReactElement => {
  const [hasAccount, setHasAccount] = useState(true)

  const handleFormSwitch = (e: React.MouseEvent) => {
    e.preventDefault()
    setHasAccount(!hasAccount)
  }
  const initialValuesSignUp: signUpForm = {
    email: '',
    username: '',
    password: '',
  }
  const initialValuesLogin: loginForm = { username: '', password: '' }

  return hasAccount ? (
    <Container class='login-screen'>
      <img src={logo} alt='Gameyo logo' />
      <Formik
        initialValues={initialValuesLogin}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          actions.setSubmitting(false)
          setUser({ values })
        }}
      >
        <Form>
          <Container class='login-field'>
            <label htmlFor='username'>Username</label>
            <Field id='username' name='username' placeholder='Username' />
          </Container>
          <Container class='login-field'>
            <label htmlFor='password'>Password</label>
            <Field
              id='password'
              name='password'
              placeholder='Password'
              type='password'
            />
          </Container>
          <button type='submit'>Log in</button>
          <button onClick={handleFormSwitch}>Don't have an account?</button>
        </Form>
      </Formik>
    </Container>
  ) : (
    <Container class='login-screen'>
      <img src={logo} alt='Gameyo logo' />
      <Formik
        initialValues={initialValuesSignUp}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          actions.setSubmitting(false)
          setUser({ values })
        }}
      >
        <Form>
          <Container class='login-field'>
            <label htmlFor='username'>Email</label>
            <Field id='username' name='username' placeholder='Username' />
          </Container>
          <Container class='login-field'>
            <label htmlFor='username'>Username</label>
            <Field id='username' name='username' placeholder='Username' />
          </Container>
          <Container class='login-field'>
            <label htmlFor='password'>Password</label>
            <Field
              id='password'
              name='password'
              placeholder='Password'
              type='password'
            />
          </Container>

          <button type='submit'>Sign Up</button>
          <button onClick={handleFormSwitch}>Already have an Account?</button>
        </Form>
      </Formik>
    </Container>
  )
}
