import React from "react";

const SignupForm = ()=>{
    return (
        <div className="container">
          <div className="app-wrapper">
            <div>
              <h2 className="title">Create Account</h2>
            </div>
            <form className="form-wrapper">
              <div className="name">
                <label className="label">Full Name</label>
                <input className="input" type="text"/>
              </div>
            </form>
          </div>
        </div>
    )
}

export default SignupForm