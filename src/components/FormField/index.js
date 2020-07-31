import React from 'react';

function FormField({fieldLabel, fieldType, fieldName, fieldValue, fieldHandler}) {
  return(
    <div>
    <label>
      Category { fieldLabel }
      <input 
        type= { fieldType } 
        name = { fieldName }
        value = { fieldValue }
        onChange= { fieldHandler }
      />
    </label>
  </div>
  )
}


export default FormField;