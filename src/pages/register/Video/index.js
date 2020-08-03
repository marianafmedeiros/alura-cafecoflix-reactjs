import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/Button';
import videosRepos from '../../../repositories/videos';
import categoriesRepos from '../../../repositories/categories';

function RegisterVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);

  const { handleChange, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoriesRepos.getAllCategories()
      .then((allCategories) => {
        setCategories(allCategories);
      });
  }, []);

  return (
    <BaseTemplate>
      <h1>Register your video here</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        // const chosenCategory = categories.find((category) => category.tittle === values.category);
        // console.log(chosenCategory);

        videosRepos.create({
          title: values.title,
          url: values.url,
          categoryId: 1,
        })
          .then(() => {
            console.log('Video was registered successfully!');
            history.push('/');
          });
      }}
      >

        <FormField
          fieldLabel="Video Title"
          fieldType="input"
          fieldName="title"
          fieldValue={values.title}
          onChange={handleChange}
        />

        <FormField
          fieldLabel="URL"
          fieldType="input"
          fieldName="url"
          fieldValue={values.url}
          onChange={handleChange}
        />

        <FormField
          fieldLabel="Category"
          fieldType="input"
          fieldName="category"
          fieldValue={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Register Video
        </Button>

      </form>

      <Link to="/register/category">
        Create Category
      </Link>

    </BaseTemplate>
  );
}

export default RegisterVideo;
