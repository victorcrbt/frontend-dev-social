import * as yup from 'yup';

const signInSchema = yup.object().shape({
  first_name: yup.string().required('O nome é obrigatório.'),
  last_name: yup.string().required('O sobrenome é obrigatório.'),
  email: yup
    .string()
    .email('Formato de e-mail inválido.')
    .required('O e-mail é obrigatório.'),
  password: yup.string().min(6, 'A senha deve conter ao menos 6 caracteres.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas não coincidem.')
    .required('Confirme sua senha.'),
});

export default signInSchema;
