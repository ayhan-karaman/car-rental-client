import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";


export  const customConfirm = ({title, text, operationType, operationFunc}) => {
  
  return  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#008080',
    cancelButtonColor: '#d33',
    denyButtonColor:'#008080',
    confirmButtonText: `Yes ${operationType.toLowerCase()} it!`,
    
  }).then(async (result) => {
    
    if (result.isConfirmed) {
      
      try {
          const response = await operationFunc()
         
          Swal.fire(
            `${operationType}!`,
            `${response.message}`,
             'success'
          )
      } catch (error) {
          Swal.fire(
            `${operationType}!`,
            `${error.response.data.message}`,
             'error'
          )
      }
      
    }
    else{
      Swal.fire(
        `${operationType}!`,
        'İşleminiz iptal edildi!',
        'error'
      ) 
    }
  })
  
}
customConfirm.prototype= {
 title:PropTypes.string,
 text:PropTypes.string,
 operationType:PropTypes.string,
 operationFunc:PropTypes.func
}

