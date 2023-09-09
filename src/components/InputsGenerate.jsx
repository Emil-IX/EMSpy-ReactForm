

export const InputsGenerate = ({ optionalField,valid ,changeInstate ,label,type, placeHolder,name, value, onChange,errorAlert, regularExpression  }) => {

    
    const validateInstate = () => {
    if (regularExpression) {
        if (regularExpression.test(value)) {
            changeInstate({ valid: true})
            console.log('valid')
       } else if(optionalField && value.length <= 0  ){
            changeInstate({ valid: true})
       } else {
            changeInstate({ valid: false})
            console.log('invalid')    
        }
   }
}

  
      
  return (

    <div className='mb-3'>
        <label className='form-label'>{label}</label>
        <input 
            type={type}
            className='form-control'
            placeholder={placeHolder}
            name={name}
            value={ value }
            onChange={ onChange }
            onKeyUp={validateInstate }
            onBlur={validateInstate}
            />
            { (valid === false  && value.length > 0 ) 
             ? true &&  <div className ="alert alert-danger" role="alert"> {errorAlert} </div> 
             : delete (<div className ="alert alert-danger" role="alert"> {errorAlert} </div>)
            }        
           
        </div>
  )
}

