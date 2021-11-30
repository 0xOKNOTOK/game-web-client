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

export const LoginScreen: React.FC<Props> = (): React.ReactElement => {
  const initialValues: loginForm = { username: '', password: '' }
  return (
    <Container class='login-screen'>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }}
      >
        <Form>
          <label htmlFor='username'>Username</label>
          <Field id='username' name='username' placeholder='Username' />
          <label htmlFor='password'>Password</label>
          <Field
            id='password'
            name='password'
            placeholder='Password'
            type='password'
          />
          <button type='submit'>Log in</button>
        </Form>
      </Formik>
    </Container>
  )
}
