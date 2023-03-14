import * as Yup from 'yup'
export const registerSchema1 = Yup.object().shape({
  email: Yup.string().email().required('Please enter the email address'),
  name: Yup.string().required('Please enter the name')
})

export const registerSchema2 = Yup.object().shape({
  code: Yup.string().required('Please enter the job title'),
})

export const registerSchema3 = Yup.object().shape({
  password: Yup.string().required('Please enter the password').min(8, 'Passoword length should be at least 8'),
  job: Yup.string().required('Please enter the job title'),
  phone: Yup.string().required('Please enter the phone number'),
  company: Yup.string().required('Please enter the company'),
  business: Yup.string().required('Please enter the business sector'),
  reason: Yup.string().required('Please select the reason'),
})