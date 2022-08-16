import './style.css';
import React from 'react';

function About() {
    return (
        <body className='About'>
            <h1 className='pageHeader'>About</h1>
            <div className='pageBody'>
                <p>Thanks for visiting this site! When completed, this site will be your go-to place for both finding trivia in your area and practicing!</p>
                <p>First, I will be focused on creating the game play portion. I will use a third party API for questions for now and eventually would like to create an API that allows user submission.</p>
                <p>Second, I will add the 'locate trivia near me!' The locations (name, address, website, day of the week, time, and notes) will live in an API that I create. I'd like to implement google maps API to display them on the page in your area. Additionally, I will create a submission form so users can add their favorite trivia spots! I may have an approval process for this to ensure validity and google maps locates appropriately.</p>
                <p>Please reach out with feedback or questions! Thanks for looking!</p>
            </div>
        </body>
    )
}

export default About;