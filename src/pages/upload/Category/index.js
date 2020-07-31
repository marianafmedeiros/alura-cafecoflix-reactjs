import React, { useState } from 'react';
import BaseTemplate from '../../../components/BaseTemplate'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CreateCategory() {
  const categoryObj = {
    name: '',
    description: '',
    color: '',
  }
  
  const [categories, setCategories] = useState([]);
  const [ categoryValues, setCategoryValues ] = useState(categoryObj);

  function setValue(key, value) {
    setCategoryValues({
      ...categoryValues,
     [key]: value,
      
    })
  };

  function handleChange(eventHandler) {
    const { getAttribute, value } = eventHandler.target;
    setValue(
      getAttribute('name'),
      value
    )
  }

  return (
    <BaseTemplate>
      <h1>Create Category</h1>

      <form onSubmit= {function handleSubmit(e) {
          e.preventDefault();
          setCategories([...categories, categoryValues])
          setCategoryValues(categoryObj)
          console.log('categories: ', categories)
          console.log('category name: ', categoryValues)
          }
        } >
        
        {/* <FormField fieldName, fieldValue, fieldHandle/> */}

        <FormField 
          fieldLabel = "Name"
          fieldType = "input"
          fieldName = "name" 
          fieldValue = {categoryValues.name} 
          fieldHandler = { handleChange }
        />

        <FormField 
          fieldLabel = "Description"
          fieldType = "text"
          fieldName = "description" 
          fieldValue = {categoryValues.description} 
          fieldHandler = { handleChange }
        />

        <FormField 
          fieldLabel = "color"
          fieldType = "color"
          fieldName = "color" 
          fieldValue = {categoryValues.color} 
          fieldHandler = { handleChange }
        />

        <button>
          Save
        </button>

      </form>

      <ul>
       { categories.map((category, idx) => {
         return(
          <li key={`${category.name}${idx}`}> {category.name} </li>
         )
       }) }
      </ul>

      <Link to="/">
        Go to Home
      </Link>
    </BaseTemplate>
  )
};

export default CreateCategory;