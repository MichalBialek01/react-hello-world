import './App.css';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Contact} from "./pages/Contact";
import {PageNotFound} from "./pages/PageNotFound";
import {Navbar} from "./Navbar";
import {useState} from "react";
import {Profile} from "./pages/Profile";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";



function App() {

    const client = new QueryClient(
        {defaultOptions:{
            queries:{
                refetchOnWindowFocus: false
            }
            }}
    );

    //Define it above Routes
    const [username, setUsername] = useState("MichalBialek01");




    return (
        <div className="App">
            <QueryClientProvider client={client}>

            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home username={username}/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/contact/" element={<Contact username={username} setUsername={setUsername}/>}/>
                    <Route path="/profile/" element={<Profile/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
                <div>
                    <footer>Created in 2024 by Me © </footer>
                </div>
            </Router>
            </QueryClientProvider>
        </div>
    )
}



export default App;



