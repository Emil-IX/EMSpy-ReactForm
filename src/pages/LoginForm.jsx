import { useState } from 'react';
import { Link } from 'react-router-dom';


import { useForm } from '../hooks/useForm'
import { InputsGenerate } from '../components/inputsGenerate';
import { SideBar } from '../components/SideBar';


export const LoginForm= () => {
    

   const initialState =  {
        email:"",
        user:"",
       password:"",
      

    }
    //use for to create yours form fields
     const {formState, setFormState , onInputChange, onResetForm, user,email, password} = useForm(initialState);

    // states for final validations
     const [Email, setEmail] = useState({ valid: null});
     const [User, setUser] = useState({ valid: null});
     const [Pasword, setPasword] = useState({ valid: null});
     const [formValid, setformValid] = useState(null)
     const [formValid2, setformValid2] = useState(null)

     //use or insert regular expretions here
     const expretionss= {
        user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
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

        if (
            User.valid &&
            Email.valid &&
            Pasword.valid 
            
            ) {

            setFormState(initialState)
            setUser({valid: null})
            setEmail({valid: null})
            setPasword({valid: null})
            setformValid(true)
            clearAlert(setformValid);
            console.log('enviendo...')
    
        }else {

            setformValid2(true)
            clearAlert(setformValid2);
       

        }
     
         
    }

  return (

    
    <div className='body2 container-fluid row'>

    <SideBar />

    <div className='principal container col-xs-12 col-sm-9'> 

        <h1 className='title animate__animated animate__fadeInDown'>EMSpyForm</h1>
    
        <div className='EMSform container-sm  border border-5 animate__animated animate__fadeIn'>

            <form onSubmit={ onSubmit}>

                <InputsGenerate
                    label="User name"
                    type="text"
                    placeHolder="Example05"
                    name="user"
                    value={ user }
                    onChange={ onInputChange }
                    regularExpression={expretionss.user}
                    changeInstate={setUser}
                    valid={User.valid}
                    errorAlert="User invalid, tray again"
                    
                />

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
                    label="Password"
                    type="password"
                    placeHolder=""
                    name="password"
                    value={ password }
                    onChange={ onInputChange }
                    regularExpression={expretionss.password}
                    changeInstate={setPasword}
                    valid={Pasword.valid}
                    errorAlert="Password invalid, tray again"
                    
                />
            
                    
            { 
                formValid && <div className="alert alert-success text-center p-1" role="alert">
              Login success!
                </div>
            }
            { 
                formValid2 && <div className="alert alert-danger text-center p-1" role="alert">
                One or more fields are invalid
                </div>
            }

                <div className='d-flex'>
                    <button type='submit' className='btn btn-info btn2'>Sign In</button>
                   <Link className='btn btn-success btn2' to='/registerform' >Sign Up</Link>   
                   
                </div>
            </form>
        
        </div>
    </div>
</div>
  )
}

