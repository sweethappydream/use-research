import * as Yup from 'yup'
export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Please enter the email address'),
  password: Yup.string().required('Please enter the password').min(8, 'Passoword length should be at least 8'),
})