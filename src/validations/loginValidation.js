import * as yup from 'yup';

const validationSchema = yup.object().shape({
    emailOrUserName: yup.string().required("Lütfen kullanıcı adınızı veya email adresinizi giriniz"),
    password: yup.string().min(5, "Şifreniz minimum 5 karakter olmalıdır.").required("Şifre bilgilerinizi giriniz")
});

export default validationSchema;