import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container p-5 mt-5'>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <fieldset className="border p-4 bg-light rounded-4 shadow p-4 mb-4 bg-light">
            <h2 className="d-flex justify-content-center bold mt-3">Welcome Back</h2>
            <form className="align-items-center justify-content-center mt-4 ms-4 me-4 p-4">
              <div className="container">
                <label className="form-label">Email: </label>
                <input type="email" className="form-control" required /><br />
                <label className="form-label">Password: </label>
                <input type="password" className="form-control" required /><br />
              </div>
              <div className="container text-center mt-3">
                <button className="btn btn-primary">Submit</button>
              </div>
              <p className="d-flex justify-content-center mt-3">Don't have an account?
                <Link to="/signup" className="ps-2">Sign Up</Link>
              </p>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default Login;

