import React from 'react';

function Home() {
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img className='card-img' alt='picture' />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h1>About me</h1>
                        <p>My name is Nick Rosales. Through my work experiences I've developed excellent collaboration skills.
                            These were further expanded through working with multiple team members on
                            different full stack projects and enhanced my abilities to work on challenges as
                            a team. I have outstanding attention to detail, with a high capacity to stick to
                            deadlines and problem solve. I'm passionate about pursuing a career that will
                            let me expand my skill set.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home