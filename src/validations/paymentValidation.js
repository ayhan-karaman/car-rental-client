import * as yup from 'yup';

const validationSchema = yup.object().shape({
    cardHolderName: yup.string().required("Kart sahibinin adını ve soyadını giriniz"),
    cardNumber: yup.string()
    .matches(/^[0-9]+$/, "Sayısal Karakter girmelisiniz")
    .min(16, "Kart numaranız 16 adet sayısal karakterden oluşmalıdır.")
    .required("Kart numarasını giriniz"),
    expDate:yup.string().matches(
            /([0-9]{2})\/([0-9]{2})/,
            'Geçerli formatta giriniz. Example: MM/YY'
          )
          .required('Son kullanma tarihini giriniz'),
    cvv:yup.string()
    .min(3, 'CVV Kodunuz minimum 3 karakter olmalıdır!')
    .max(3, 'CVV Kodunuz maximum 3 karakter olmalıdır!')
    .matches(/^[0-9]+$/, "Sayısal Karakter girmelisiniz")
    .required('Kartınız arkasında yer CVV kodunuzu giriniz')
});

export default validationSchema;


// .matches(
//     /([0-9]{2})\/([0-9]{2})/,
//     'Not a valid expiration date. Example: MM/YY'
//   )