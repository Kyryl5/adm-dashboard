import * as yup from 'yup';

export const checkoutSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  password: yup
    .string()
    .min(4, 'Password must be at least 4 characters')
    .max(32, 'Password must not exceed 32 characters')
    .required('required'),
});

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const checkoutLoginSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('required'),
  password: yup
    .string()
    .min(4, 'Password must be at least 4 characters')
    .max(32, 'Password must not exceed 32 characters')
    .required('required'),
});

export const initialLoginValues = {
  email: '',
  password: '',
};