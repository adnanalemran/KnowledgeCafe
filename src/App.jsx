/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks,setBookMarks]= useState([]);
  const [reading_time,setReadingTime]= useState(0);


  const hendaleBookMarks = blog=>{
    const newBookMarks = [...bookMarks,blog];
    setBookMarks(newBookMarks);
  }
const heandaleMarkasRead = (time,id) => {
    setReadingTime(reading_time+time);
    const remainigBookMarks = bookMarks.filter(bookMarks => bookMarks.id != id);
    setBookMarks(remainigBookMarks);

}
  
  return (
    <>
     
      <Header />
      <div className="md:flex max-w-7xl mx-auto p-4">
        <Blogs heandaleMarkasRead={heandaleMarkasRead} hendaleBookMarks={hendaleBookMarks} />
        <BookMarks bookMarks={bookMarks} reading_time={reading_time}/>

      </div>
   
    </>
  );
}

export default App;
