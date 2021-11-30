import React from 'react'
import { Container } from './Container'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik'

interface Props {
  setUser: Function
}

interface loginForm {
  username: string
  password: string
}

export const LoginScreen: React.FC<Props> = ({
  setUser,
}): React.ReactElement => {
  const initialValues: loginForm = { username: '', password: '' }
  return (
    <Container class='login-screen'>
      <Formik
        initialValues={initialValues}
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
        </Form>
      </Formik>
    </Container>
  )
}
