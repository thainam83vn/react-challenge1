import React from 'react';
import './post.scss';
export default props => {
  const { title, url } = props;
  return (
    <div className='post'>
      <div>{title}</div>
      <div>
        <img src={url} />
      </div>
    </div>
  );
};
