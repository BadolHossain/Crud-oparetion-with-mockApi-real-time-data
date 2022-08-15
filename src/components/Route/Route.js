import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Create from '../Create/Create';
import Read from '../Read/Read';

const Routet = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Create></Create>}></Route>
                <Route path="/read" element={<Read />}></Route>
            </Routes>
        </div>
    );
};

export default Routet;