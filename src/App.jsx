import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks,setBookMarks]= useState([]);

  const hendaleBookMarks = blog=>{
    console.log('book mark')
  }
  return (
    <>
     
      <Header />
      <div className="md:flex max-w-7xl mx-auto p-4">
        <Blogs hendaleBookMarks={hendaleBookMarks} />
        <BookMarks/>

      </div>
   
    </>
  );
}

export default App;
