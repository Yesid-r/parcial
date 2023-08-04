import React, { Component } from 'react';



import {Routes, Route, Navigate} from 'react-router-dom';


import DishesList from '../components/DishesList';
import Register from '../components/Register';



class Routers extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Navigate to = '/vertodos' />} />
                <Route path="/vertodos" element={<DishesList />} />
                <Route path="/register" element={<Register />} />
                
            </Routes>
        );
    }
}

export default Routers;