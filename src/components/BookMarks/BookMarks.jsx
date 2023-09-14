/* eslint-disable react/prop-types */
 
import BookMark from '../BookMark/BookMark';

const BookMarks = ({ bookMarks ,reading_time }) => {
  return (
    <div className='w-1/3 bg-gray-300 ml-4 my-2 pt-4 rounded-2xl'>
        <div className="">
            <h3 className='text-2xl text-center bg-slate-200 p-6 rounded-xl m-4' > Reading time : {reading_time}</h3>
        </div>
      <h2 className='text-xl text-center '>Bookmarks Blog Number : {bookMarks.length}</h2>
      {
        bookMarks.map(bookMarks=><BookMark key={BookMark.id} bookMarks={bookMarks}/>)
      }
    </div>
  );
};

export default BookMarks;
