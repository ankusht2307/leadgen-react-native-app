import * as yup from 'yup';

const AuthenticationFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('not a valid email')
    .required('email must not be empty.'),
  password: yup
    .string()
    .required('pmail must not be empty.')
    .min(6, 'length must be between 6 to 15')
    .max(15, 'length must be between 6 to 15'),
});

export default AuthenticationFormSchema;
