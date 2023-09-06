import React from 'react'

export const EMSpyFrom = () => {
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
                name='Email'
                />
        </div>

        <div className='mb-3'>
            <label className='form-label'>CC (Opcional)</label>
            <input 
                type="email" 
                className='form-control'
                placeholder='EmailALT@gmail.com'
                name='CC'
                />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Affair</label>
            <input 
                type="email" 
                className='form-control'
                placeholder='Affair email'
                name='Email'
                />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Message</label>
            <textarea 
                type="email" 
                className='form-control pb-5'
                placeholder='Message...'
                name='message'
                />
        </div>

        <div className='d-flex'>
            <button type='submit' className='btn btn-primary btn2'>Send</button>
            <button type='reset' className='btn btn-secondary btn2'>Reset</button>     
        </div>
       </form>


        
    </div>
</>
  )
}
