import React from 'react';
import BaseTemplate from '../../../components/BaseTemplate'
import { Link } from 'react-router-dom';

function CreateCategory() {
  return (
    <BaseTemplate>
      <h1>Create Category</h1>

      <Link to="/">
        Go to Home
      </Link>
    </BaseTemplate>
  )
};

export default CreateCategory;