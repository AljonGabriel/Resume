import Navbar from "./components/navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
