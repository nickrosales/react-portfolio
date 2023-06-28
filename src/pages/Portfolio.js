import React from 'react';
import goblin from '../assets/gofullgoblinexampleone.png';
import users from '../assets/users.png';
import Hello_Fitness from '../assets/helloworkout.PNG'
import workday from '../assets/workday.PNG'

function test() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className='container'>
                <div className='row justify-content-center mb-4'>
                    <div className="col-lg-4 col-md-4 col-sm-8">
                        <div class>
                            <a href="https://enigmatic-ocean-17261.herokuapp.com/" target='_blank' style={{ color: 'black', textDecoration: 'none'}}>
                                <div class="card-body">
                                    <h5 class="card-title">Hello Workout</h5>
                                    <p class="card-text">This is a full stack application where users can easily save their preferred workouts to their personal dashboard.  This allows them to customize their workout routine and make fitness work for them!</p>
                                </div>
                                <img src={Hello_Fitness} class="card-img-top" style={{ width: 400, height: 310 }} alt="Hello Workout Screenshot" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-8">
                        <div class>
                            <a href="https://nickrosales.github.io/go-full-goblin/" target='_blank' style={{ color: 'black', textDecoration: 'none'}}>
                                <div class="card-body">
                                    <h5 class="card-title">Drink API Project</h5>
                                    <p class="card-text mb-5">Search page that creates a random drink based on the ingredient you searched.</p>
                                </div>
                                <img src={goblin} class="card-img-top" style={{ width: 400, height: 310 }} alt="Hello Workout Screenshot" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className="col-lg-4 col-md-4 col-sm-8">
                        <div class>
                            <a href="https://nickrosales.github.io/Work-Day-Scheduler/" target='_blank' style={{ color: 'black', textDecoration: 'none'}}>
                                <div class="card-body">
                                    <h5 class="card-title">Work Day Scheduler</h5>
                                    <p class="card-text">application that uses local storage to save events</p>
                                </div>
                                <img src={workday} class="card-img-top mb-4" style={{ width: 400, height: 310 }} alt="Hello Workout Screenshot" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-8">
                        <div class>
                            <a href="https://github.com/nickrosales/Social-Network-API" target='_blank' style={{ color: 'black', textDecoration: 'none'}}>
                                <div class="card-body">
                                    <h5 class="card-title">Social Media API.</h5>
                                    <p class="card-text">Back end API for a Social media site.</p>
                                </div>
                                <img src={users} class="card-img-top mb-4" style={{ width: 400, height: 310 }} alt="Hello Workout Screenshot" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default test