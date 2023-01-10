
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import User from "./User/User";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="users" element={<User />}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
