import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div id="home-wrapper">
            <div>
                <div id="home-txt-bgd">
                    <h1 id="home-txt">OsKey</h1>
                </div>
                <Link to="/login"><button type="button" className="btn btn-info" id="get-started-btn">Get Started</button></Link>
            </div>
            
        </div>

    );
}

export default Home