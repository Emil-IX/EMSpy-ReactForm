// This part can be used to create you own inputs

export const InputsGenerate = (
  { optionalField,
    sameField,
    valid,
    changeInstate,
    label,
    type,
    placeHolder,
    name,
    value,
    onChange,
    errorAlert,
    regularExpression,
    classN,  
  }) => {

 //validations to  see if there are regularexpresion  
    const validatSameField = () => {
        if (sameField === value) {
          changeInstate({ valid: true})
          console.log('valid')
        } else if(optionalField && value.length <= 0  ){
              changeInstate({ valid: true})
        } else {
              changeInstate({ valid: false})
              console.log('invalid')    
        }
      }
 
    const validateInstate = () => {
    if (regularExpression) {
        if (regularExpression.test(value)) {
            changeInstate({ valid: true})
            // console.log('valid')
        } else if(optionalField && value.length <= 0  ){
              changeInstate({ valid: true})
        } else {
              changeInstate({ valid: false})
              // console.log('invalid')    
          }
     } 

     if (sameField) {
       validatSameField(); 
     }
  }

   
  return (

    <div className={`mb-4  ${ classN }`}>
        <label className='form-label'>{label}</label>
        <input 
            type={type}
            className={`form-control`} //insert your input props
            placeholder={placeHolder}
            name={name}
            value={ value }
            onChange={ onChange }
            onKeyUp={validateInstate }
            onBlur={validateInstate}
            />
            { (valid === false  && value.length > 0 ) 
             ? true &&  <div className ="alert alert-danger m-0 p-0" role="alert"> {errorAlert} </div> 
             : delete (<div className ="alert alert-danger" role="alert"> {errorAlert} </div>)
            }        
           
        </div>
  )
}

