import * as yup from 'yup';

export const AuthenticationFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Not a valid email')
    .required('Email must not be empty.'),
  password: yup
    .string()
    .required('Pmail must not be empty.')
    .min(6, 'length must be between 6 to 15')
    .max(15, 'length must be between 6 to 15'),
});
