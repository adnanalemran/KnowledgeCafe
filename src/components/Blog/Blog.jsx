import React from 'react';
import PropTypes from 'prop-types'; 

const Blog = ({ blog }) => {
  const { title } = blog;

  return (
    <div className="blog">
      <h2>{title}</h2>
    </div>
  );
};


Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
