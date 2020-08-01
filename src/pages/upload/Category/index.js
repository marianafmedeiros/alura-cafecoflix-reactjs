import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/Button';

function CreateCategory() {
  const categoryObj = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    const URL = 'http://localhost:8080/categories';
    fetch(URL)
      .then(async (response) => {
        const myData = await response.json();
        setCategories([
          ...myData,
        ]);
      });
    // setTimeout(() => {

    // }, 4 * 1000);
  }, []);

  return (
    <BaseTemplate>
      <h1>Create Category</h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategories([
          ...categories,
          categoryValues,
        ]);
        setCategoryValues(categoryObj);
        // console.log('categories: ', categories);
        // console.log('category object: ', categoryValues);
      }}
      >

        <FormField
          fieldLabel="Name"
          fieldType="input"
          fieldName="name"
          fieldValue={categoryValues.name}
          onChange={handleChange}
        />

        <FormField
          fieldLabel="Description"
          fieldType="textarea"
          fieldName="description"
          fieldValue={categoryValues.description}
          onChange={handleChange}
        />

        <FormField
          fieldLabel="Color"
          fieldType="color"
          fieldName="color"
          fieldValue={categoryValues.color}
          onChange={handleChange}
        />

        <Button>
          Save
        </Button>

      </form>

      {
        categories.length === 0
        && (
        <div>
          Loading...
        </div>
        )
      }

      <ul>
        { categories.map((category) => (
          <li key={`${category.name}`}>
            {' '}
            {category.name}
            {' '}
          </li>
        )) }
      </ul>

      <Link to="/">
        Go to Home
      </Link>
    </BaseTemplate>
  );
}

export default CreateCategory;
