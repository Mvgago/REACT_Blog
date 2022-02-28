import "./styles/main.scss";
import Home from "./pages/Home/Home";
import NavBar from "./componentes/NavBar/NavBar";
import Services from "./pages/Services/Services";
import Users from "./pages/Users/Users";
import Contact from "./pages/Contact/Contact";
import SinglePost from "./pages/SinglePost/SinglePost";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="services" element={<Services />}/>
          <Route path="users" element={<Users />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="singlePost/:postId" element={<SinglePost />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
