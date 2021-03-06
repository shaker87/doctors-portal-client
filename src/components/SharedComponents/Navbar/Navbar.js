import React from 'react';

const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-3">
                        <li class="nav-item active">
                            <a class="nav-link mr-4" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4" href="#">Dental Services</a>
                        </li>
                        <li class="nav-item">
                            <a class={`nav-link mr-4 ${window.location.pathname === '/appointment' ? 'text-secondary': 'text-white'} `} href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class={`nav-link mr-4 ${window.location.pathname === '/appointment' ? 'text-secondary': 'text-white'} `} href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class={`nav-link mr-4 ${window.location.pathname === '/appointment' ? 'text-secondary': 'text-white'} `} href="#">Contact Us</a>
                        </li>
                    </ul>   
                </div>
            </nav>
        </div>
        
      
    );
};

export default Navbar;