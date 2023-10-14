import React, { useState } from 'react';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

    <div className="container">

    <div className="row justify-content-end">

    <div className="col-md-6">
                      <img
                        src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.15752-9/383620671_1484857089020685_8682181710115947700_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHuOi0_dLfGn6wbtIDd6xwo45OibCYdQCLjk6JsJh1AItaeGl_ynMAK3kgQg_PGO-RWxs7zoAR5ws5iUJmZO8m5&_nc_ohc=BGC2CF1eq8gAX94lKCm&_nc_ht=scontent.fcrk1-4.fna&oh=03_AdT0Y13tA_y_t0nUfKWKX6FyrnOv_RzjmgOBDvCpk4dyWA&oe=65373ED1" // Replace with the URL of your image
                        alt="Left Image"
                        className="img-fluid logo"
                      />
                    </div>

        <div className="col-md-6">

            <div className="card-body">

              <h2 className="card-title text-start mt-5 mb-3 ">Hello Garbage.</h2>

              <form onSubmit={handleSubmit}>

                <div className="form-group ebox">

              

                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='Email'
                  />
                </div>

                <div className="form-group">


                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder='Password'
                  />
                </div>

                  <div className="form-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agreeCheckbox"
                      required
                    />
                    <label className="form-check-label" htmlFor="agreeCheckbox">
                      I agree to the terms and services
                    </label>
                  </div>
                </div>

                <div className="text-center">
                  
                  <button type="submit" className="btn mt-3 btn-secondary">
                    Log in
                  </button>
                  
                  <p className='dont'>Don't have an account?
                   <a href="/Register">Sign Up</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Login;
