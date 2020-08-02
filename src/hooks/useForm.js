import { useState } from 'react';

function useForm(categoryObj) {
  const [categoryValues, setCategoryValues] = useState(categoryObj);

  function setValue(key, value) {
    setCategoryValues({
      ...categoryValues,
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
    setCategoryValues(categoryObj);
  }

  return {
    handleChange,
    categoryValues,
    clearForm,
  };
}

export default useForm;
