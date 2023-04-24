import React from 'react';

function test() {
    return (
        <div>
            <h1>Contact</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter you email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Enter your message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <a href="" className="btn btn-primary">Send!</a>
        </div>
    );
}

export default test