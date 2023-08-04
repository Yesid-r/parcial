import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Routers from '../router/Routers';





class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar />                
                <Routers />
                
            </div>
        );
    }
}

export default Layout;
