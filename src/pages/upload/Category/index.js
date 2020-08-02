import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/Button';
import useForm from '../../../hooks/useForm';

function CreateCategory() {
  const categoryObj = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, categoryValues, clearForm } = useForm(categoryObj);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://cafecoflix.herokuapp.com/categories';
    fetch(URL)
      .then(async (response) => {
        const myData = await response.json();
        setCategories([
          ...myData,
        ]);
      });
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

        clearForm();
        // console.log('categories: ', categories);
        // console.log('category object: ', categoryValues);
      }}
      >

        <FormField
          fieldLabel="Title"
          fieldType="input"
          fieldName="title"
          fieldValue={categoryValues.title}
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
          <li key={`${category.title}`}>
            {' '}
            {category.title}
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
