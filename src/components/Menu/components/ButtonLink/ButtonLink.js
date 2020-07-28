import React from 'react';

function ButtonLink(props) {
  return (
    <a className = { props.className } href = { props.link }>
      { props.title }
    </a>
  )
};

export default ButtonLink;