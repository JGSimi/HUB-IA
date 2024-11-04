import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/telas/Dashboard';
import IADetails from './components/telas/iadetails';
import Header from './components/comp/header';

function App() {
    return (
        <BrowserRouter>
            <div className="flex">
                <Header />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/ia/:id" element={<IADetails />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
