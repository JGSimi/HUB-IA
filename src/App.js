import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/telas/Dashboard';
import IADetails from './components/telas/iadetails';
import Prompts from './components/telas/Prompts';
import Header from './components/comp/header';
import GradientAnimation from './components/func/gradientanim';

function App() {
    return (
        <BrowserRouter>
            <div className="flex font-mono">
                <GradientAnimation />
                <Header />
                <main className="flex-1 w-full">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/prompts" element={<Prompts />} />
                        <Route path="/ia/:id" element={<IADetails />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
