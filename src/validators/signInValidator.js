import * as yup from 'yup';

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Formato de e-mail inválido.')
    .required('O e-mail é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.'),
});

export default signInSchema;
