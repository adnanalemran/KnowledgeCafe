/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks,setBookMarks]= useState([]);

  const hendaleBookMarks = blog=>{
    const newBookMarks = [...bookMarks,blog];
    setBookMarks(newBookMarks);
     
  }
  return (
    <>
     
      <Header />
      <div className="md:flex max-w-7xl mx-auto p-4">
        <Blogs hendaleBookMarks={hendaleBookMarks} />
        <BookMarks bookMarks={bookMarks}/>

      </div>
   
    </>
  );
}

export default App;
