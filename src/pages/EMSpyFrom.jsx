import { useState } from 'react';
import { useForm } from '../hooks/useForm'
import { InputsGenerate } from '../components/inputsGenerate';
import { TextsTareaGenerate } from '../components/TextsTareaGenerate';

export const EMSpyFrom = () => {


     const {formState, onInputChange, onResetForm, email, affair, message, CC } = useForm(
        {
            email:"",
            CC:"",
            affair:"",
            message:""

        }
     );

     const [Email, setEmail] = useState({ valid: null});
     const [EmailCC, setEmailCC] = useState({ valid: null});
     const [Affair, setAffair] = useState({ valid: null});
     const [Messagge, setMessagge] = useState({ valid: null});

     const expretionss= {
        user: /^[aer-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        message:  /^.{4,200}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        tell: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log('enviendo...')
    }
     
// console.log(Email)
// console.log(EmailCC)
// console.log(Affair)
// console.log(Messagge)

  return (
    <>
    <h1 className='title '>EMSpyForm</h1>

    <div className='EMSform border border-5'>

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
              errorAlert="Affair is empty or it has few letter"
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

            

        <div className='d-flex'>
            <button type='submit' className='btn btn-primary btn2'>Send</button>
            <button type='reset' onClick={ onResetForm } className='btn btn-secondary btn2'>Reset</button>     
        </div>
       </form>
        
    </div>
</>
  )
}

