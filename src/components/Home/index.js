import './style.css';
import React from 'react';

function Home() {
    return (
        <body className='Home'>
            <h1 className='pageHeader'>Welcome!</h1>
            <div className='pageBody'>
                <h2>Thanks for joining us! Click here to enter the site...</h2>
                <button className='EnterButton' onClick={(e) => {window.location.href = "/gameplay"}}>Enter</button>
            </div>
        </body>
    )
}

export default Home;