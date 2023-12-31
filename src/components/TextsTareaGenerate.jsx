// This part can be used to create you own inputs(texttarea)

export const TextsTareaGenerate = ({valid, changeInstate ,label,type, placeHolder,name, value, onChange,errorAlert, regularExpression  }) => {

//validations to  see if there are regularexpresion   
  const validateInstate = () => {
    if (regularExpression) {
        if (regularExpression.test(value)) {
            changeInstate({ valid: true})
        }else {
            changeInstate({ valid: false})
        }
    }
   }
    

  return (

    <div className='mb-3'>
        <label className='form-label'>{label}</label>
        <textarea 
            type={type}
            className='form-control pb-5'
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

