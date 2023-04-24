import React from 'react';
import resumepdf from '../assets/resumepdf.pdf';

function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Front-End Development</h5>
                            <ul className="card-text">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>JQuery</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Back-End Development</h5>
                            <ul className="card-text">
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>GraphQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container d-flex justify-content-center col-xl-4 col-lg-4 ">
                    <a
                        href={resumepdf}
                        className="d-flex justify-content-center btn btn-dark"
                        type="button" download>
                        Download Resume
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Resume;