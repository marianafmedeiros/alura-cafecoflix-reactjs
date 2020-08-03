import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepos from '../../../repositories/categories';

function CreateCategory() {
  const categoryObj = {
    title: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(categoryObj);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepos.getAllWithVideos()
      .then((categoriesVideos) => {
        setCategories([
          ...categoriesVideos,
        ]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <BaseTemplate>
      <h1>Create Category</h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);
        clearForm();
        // console.log('categories: ', categories);
        // console.log('category object: ', values);
      }}
      >

        <FormField
          fieldLabel="Category Name"
          fieldType="input"
          fieldName="title"
          fieldValue={values.title}
          onChange={handleChange}
        />

        <FormField
          fieldLabel="Description"
          fieldType="textarea"
          fieldName="description"
          fieldValue={values.description}
          onChange={handleChange}
        />

        <FormField
          fieldLabel="Color"
          fieldType="color"
          fieldName="color"
          fieldValue={values.color}
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
        <p>Existing Categories:</p>
        { categories.map((category) => (
          <li key={`${category.title}`}>
            {' '}
            {category.title}
            {' '}
          </li>
        )) }
      </ul>

    </BaseTemplate>
  );
}

export default CreateCategory;
