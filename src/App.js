import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Users from './Users';
import Navbar from './components/navbar';
import './App.css';

const App = () => {
    // Define the routes configuration
    const routes = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about'},
        { name: 'Users', path: '/users'}
    ];

    return (
        <Router>
            <div>
                {/* Pass the routes to the Navbar component */}
                <Navbar links={routes.map(route => ({ name: route.name, path: route.path }))} />
                <div className="container mt-3">
                    <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/users/*" element={<Users />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};
 
export default App;

