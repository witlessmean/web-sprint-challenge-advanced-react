import {useState} from 'react'


  
  // This form should be handled by a "useForm" custom hook
  // Build out the logic needed for a form custom hook (see the useForm.js file)
  // and replace the necessary stateful logic from CheckoutForm with the hook
  
//   const CheckoutForm = (props) => {
//     const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//     const [values, setValues] = useState(initialValue);
  
//     const handleChanges = (e) => {
//       setValues({ ...values, [e.target.name]: e.target.value });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setShowSuccessMessage(true);
//     }
// }

function useForm(initialValue) {
   console.log(initialValue) 
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   
   const [values, setValues] = useState(initialValue);
   
   const handleChanges = (e) => {
          setValues({ ...values, [e.target.name]: e.target.value });
         };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  }

  return [values, handleChanges, showSuccessMessage, handleSubmit]

}

export default useForm