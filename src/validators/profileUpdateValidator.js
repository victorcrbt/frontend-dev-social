import * as yup from 'yup';

const signInSchema = yup.object().shape({
  first_name: yup.string().required('O nome é obrigatório.'),
  last_name: yup.string().required('O sobrenome é obrigatório.'),
  email: yup
    .string()
    .email('Formato de e-mail inválido.')
    .required('O e-mail é obrigatório.'),
  oldPassword: yup.string(),
  password: yup.string().when('oldPassword', (fieldValue, field) => {
    return fieldValue
      ? field.min(6, 'A senha deve conter ao menos 6 caractéres.')
      : field;
  }),
  confirmPassword: yup.string().when('password', (fieldValue, field) => {
    return fieldValue
      ? field
          .required('Preencha a confirmação de senha.')
          .oneOf([yup.ref('password')], 'As senhas devem ser iguais.')
      : field;
  }),
});

export default signInSchema;
