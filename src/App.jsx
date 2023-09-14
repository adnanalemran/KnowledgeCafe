import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex">
        <Blogs />
        <BookMarks/>

      </div>
   
    </>
  );
}

export default App;
