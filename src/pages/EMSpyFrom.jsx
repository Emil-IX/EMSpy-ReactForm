import React from 'react'
import { useForm } from '../hooks/useForm'

export const EMSpyFrom = () => {


     const {formState,onInputChange,onResetForm,email,affair,message, CC } = useForm(
        {
            email:"",
            CC:"",
            affair:"",
            message:""

        }
     );

     

  return (
    <>
    <h1 className='title '>EMSpyFrom</h1>

    <div className='EMSform border border-5'>
       <form action="">
   
        <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input 
                type="email" 
                className='form-control'
                placeholder='Email@gmail.com'
                name='email'
                value={ email }
                onChange={ onInputChange }
                />
        </div>

        <div className='mb-3'>
            <label className='form-label'>CC (Opcional)</label>
            <input 
                type="email" 
                className='form-control'
                placeholder='EmailALT@gmail.com'
                name='CC'
                value={ CC }
                onChange={ onInputChange }
                />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Affair</label>
            <input 
                type="text" 
                className='form-control'
                placeholder='Affair email'
                name='affair'
                value={ affair }
                onChange={ onInputChange }
                />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Message</label>
            <textarea 
                type="email" 
                className='form-control pb-5'
                placeholder='Message...'
                name='message'
                value={ message}
                onChange={ onInputChange }
                />
        </div>

        <div className='d-flex'>
            <button type='submit' className='btn btn-primary btn2'>Send</button>
            <button onClick={ onResetForm } className='btn btn-secondary btn2'>Reset</button>     
        </div>
       </form>
        
    </div>
</>
  )
}
