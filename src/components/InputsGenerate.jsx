

export const InputsGenerate = ({ valid ,changeInstate ,label,type, placeHolder,name, value, onChange,errorAlert, regularExpression  }) => {

    
    const validateInstate = () => {
    if (regularExpression) {
        if (regularExpression.test(value)) {
            changeInstate({ valid: true})
            console.log('valid')
        }else {
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
            onKeyUp={validateInstate}
            onBlur={validateInstate}
            />
            { (valid === false) 
             ? true &&  <div className ="alert alert-danger" role="alert"> {errorAlert} </div> 
             : false &&  <div className ="alert alert-danger" role="alert"> {errorAlert} </div> 
            }
        </div>
  )
}

