import * as yup from 'yup';

const UserSchema = yup.object().shape({
  name: yup.string().required('Please add name'),
  email: yup.string().email('not a valid email').required('email must not be empty.'),
  designation: yup.string().required('designation is required'),
  role: yup.string().required('role is required'),
  avatar: yup.string(),
});

export default UserSchema;
