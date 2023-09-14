/* eslint-disable react/prop-types */
 
import BookMark from '../BookMark/BookMark';

const BookMarks = ({ bookMarks }) => {
  return (
    <div className='w-1/3 bg-gray-300 ml-4 my-2 pt-4 rounded-2xl'>
      <h2 className='text-xl text-center '>Bookmarks Blog Number : {bookMarks.length}</h2>
      {
        bookMarks.map(bookMarks=><BookMark key={BookMark.id} bookMarks={bookMarks}/>)
      }
    </div>
  );
};

export default BookMarks;
