/* eslint-disable react/prop-types */
import { FaBeer,FaBookmark } from 'react-icons/fa';
import PropTypes from "prop-types";

const Blog = ({ blog, hendaleBookMarks }) => {
  const { title, cover, reading_time, author_img, posted_date, author,hashtags } = blog;

  return (
    <div className="my-20">
      <img className="w-full mb-8 rounded-xl" src={cover} alt={title} />
      <div className="flex justify-between">
        <div className="flex ">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>Publish Date :{posted_date}</p>
          </div>
        </div>
        <div className="">
          <span>{reading_time} min Read</span>
          <button 
          
          onClick={()=>hendaleBookMarks(blog)}
          className='ml-2 text-2xl text-red-400'><FaBookmark> </FaBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {
            hashtags.map((hashtag, index) => {
              return <span key={index}>
                <a href="#">{hashtag} </a>
                </span>
            })
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
