import React from 'react';
import BaseTemplate from '../../../components/BaseTemplate'
import { Link } from 'react-router-dom';

function RegisterVideo() {
  return (
    <BaseTemplate>
      <h1>Upload your video here</h1>

      <Link to="/register/category">
        Create Category
      </Link>
    </BaseTemplate>
  )
};

export default RegisterVideo;