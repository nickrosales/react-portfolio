import React from 'react';

function test() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <a href="https://github.com/nickrosales/book-search-engine">
                            <img src="./bookss2.png" className="card-img-top" alt="screenshot of book search engine progject"/>
                        </a>
                            <div className="card-body">
                                <h5 className="card-title">Refactoring MERN application to use graphQL</h5>
                                <p className="card-text">Refactored existing code that uses RESTful routes into using apollo provider and graphQL</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <a href='https://github.com/kyleschop/go-full-goblin'>
                            <img src="./gofullgoblinexampleone.png" className="card-img-top" alt="screenshot of drink api search"/>
                        </a>
                            <div className="card-body">
                                <h5 className="card-title">Drink API Project</h5>
                                <p className="card-text">Search page that creates a random drink based on the ingredient you searched.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default test