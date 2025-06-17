import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";


const PersistentHeader: React.FC = () => {
    return (
        <div style={{
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '15px',
            textAlign: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2>My Pharmacy App</h2>
            <p>Drugs are bad for you</p>
        </div>
    );
};

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <BrowserRouter>
            <PersistentHeader />
            <Routes>
                <Route path="/" element={
                    isAuthenticated ? (<Home  onLogout={()=> setIsAuthenticated(false)}/>) : <Navigate to="/login" />}/>
                <Route path="/login" element={
                    isAuthenticated ? (<Navigate to="/" />) : (<Login onLogin={()=> setIsAuthenticated(true)} />)}

                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;