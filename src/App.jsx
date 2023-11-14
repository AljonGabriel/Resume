import Navbar from "./components/navbar/AppNavbar";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
