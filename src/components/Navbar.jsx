import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const navigation = [
        { name: 'Ver todos', href: 'vertodos', current: false },
        { name: 'Registrar', href: 'register', current: false }
    ]
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {navigation.map((item) => (
                            <li class="nav-item">
                                <Link to={item.href} class="nav-link" activeClassName="active">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar