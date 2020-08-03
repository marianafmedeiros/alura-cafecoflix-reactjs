import { useState } from 'react';

function useForm(initialObj) {
  const [values, setValues] = useState(initialObj);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(eventHandler) {
    setValue(
      eventHandler.target.getAttribute('name'),
      eventHandler.target.value,
    );
  }

  function clearForm() {
    setValues(initialObj);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}

export default useForm;
