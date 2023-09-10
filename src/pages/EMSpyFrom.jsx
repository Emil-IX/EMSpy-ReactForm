import { useState } from 'react';
import { useForm } from '../hooks/useForm'
import { InputsGenerate } from '../components/inputsGenerate';
import { TextsTareaGenerate } from '../components/TextsTareaGenerate';

export const EMSpyFrom = () => {
    

   const initialState =  {
        email:"",
        CC:"",
        affair:"",
        message:""

    }
    //use for to create yours form fields
     const {formState, setFormState , onInputChange, onResetForm, email, affair, message, CC } = useForm(initialState);

    // states for final validations
     const [Email, setEmail] = useState({ valid: null});
     const [EmailCC, setEmailCC] = useState({ valid: true, optional: true});
     const [Affair, setAffair] = useState({ valid: null});
     const [Messagge, setMessagge] = useState({ valid: true});
     const [formValid, setformValid] = useState(null)
     const [formValid2, setformValid2] = useState(null)

     //use or insert regular expretions here
     const expretionss= {
        user: /^[aer-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        message:  /^.{0,200}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        tell: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const clearAlert = (setFormValid) => {
        setTimeout(() => {
            setFormValid(null)
        }, 2800);
    }

    //This function send the final resuls of the form
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(EmailCC.valid)

        let aprube = true;

        if (Email.valid &&
            EmailCC.valid && 
            Affair.valid &&
            Messagge.valid
            ) {

            setFormState(initialState)
            setEmail({valid: null})
            setAffair({valid: null})
            setformValid(true)
            clearAlert(setformValid);
            console.log('enviendo...')
    
        }else {

            setformValid2(true)
            clearAlert(setformValid2);
       

        }
     
  
    }

  return (
    <>
    <h1 className='title animate__animated animate__fadeInDown'>EMSpyForm</h1>

    <div className='EMSform border border-5 animate__animated animate__fadeIn'>

       <form action="" onSubmit={ onSubmit}>

        <InputsGenerate
              label="Email"
              type="email"
              placeHolder="Example@gmail.com"
              name="email"
              value={ email }
              onChange={ onInputChange }
              regularExpression={expretionss.email}
              changeInstate={setEmail}
              valid={Email.valid}
              errorAlert="Email invalid, tray again"
              
        />
        <InputsGenerate
              label="CC (Optional)"
              type="email"
              placeHolder="Alt Example2@gmail.com"
              name="CC"
              value={ CC }
              onChange={ onInputChange }
              regularExpression={CC !== "" ? expretionss.email : null}
              changeInstate={setEmailCC}
              valid={EmailCC.valid}
              errorAlert="Email invalid, tray again"
              optionalField={EmailCC.optional}
              
        />
        <InputsGenerate
              label="Affair"
              type="text"
              placeHolder="Hello world"
              name="affair"
              value={ affair }
              onChange={ onInputChange }
              regularExpression={expretionss.name}
              changeInstate={setAffair}
              valid={Affair.valid}
              errorAlert="Affair is empty or it has few letter or it has a number"
        />
        <TextsTareaGenerate 
            label="Message"
            type="text"
            placeHolder="Message..."
            name="message"
            value={ message }
            onChange={ onInputChange }
            regularExpression={expretionss.message}
            changeInstate={setMessagge}
        />

            
       { 
         formValid && <div className="alert alert-success text-center p-1" role="alert">
         Send success!
        </div>
       }
       { 
         formValid2 && <div className="alert alert-danger text-center p-1" role="alert">
         Something is wrong, try again
        </div>
       }

        <div className='d-flex'>
            <button type='submit' className='btn btn-primary btn2'>Send</button>
            <button type='reset' onClick={ onResetForm } className='btn btn-secondary btn2'>Reset</button>     
        </div>
       </form>
        
    </div>
</>
  )
}

