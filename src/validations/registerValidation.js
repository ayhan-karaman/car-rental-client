import * as yup from 'yup';

const validationSchema = yup.object().shape({
    firstName: yup.string().min(3, "Adınız minimum 3 karakter olmalıdır.").required("Adınızı giriniz"),
    lastName: yup.string().min(3, "Soyadınız minimum 3 karakter olmalıdır.").required("Soyadınızı giriniz."),
    userName:yup.string().min(3, "Kullanıcı adınız minimum 3 karater olmalıdır.").required("Kullanıcı adınızı giriniz"),
    email:yup.string().email("Geçerli bir email adresi giriniz").required("Email adresinizi giriniz"),
    password:yup.string().min(8, "Şifreniz minimum 8 karakter içermelidir.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 
    "Bir Büyük Harf, Bir Küçük Harf, Bir Rakam ve Bir Özel Harf Karakterinden Oluşan 8 Karakter Olmalıdır")
    .required("Şifrenizi giriniz"),
    confirmPassword:yup.string().oneOf([yup.ref("password"), null], "Şifreleriniz aynı olmalıdır.").required("Şifrenizi tekrar giriniz")
});

export default validationSchema;