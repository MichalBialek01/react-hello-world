import './App.css';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Contact} from "./pages/Contact";
import {PageNotFound} from "./pages/PageNotFound";
import {Navbar} from "./Navbar";


function App() {


    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
                <div>
                    <footer>Created in 2024 by Me © </footer>
                </div>
            </Router>
        </div>
    )
}


export default App;



