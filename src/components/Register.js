import React, { useState } from 'react';


function Register() {
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Email:', email);
    console.log('Name:', Name);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
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

              <h2 className="card-title text-start mt-5 mb-3 ">Join Us!</h2>

              <form onSubmit={handleSubmit}>

                <div className="form-group">

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
                    type="Name"
                    className="form-control"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder='Name'
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

                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder='Confirm Password'
                  />

                </div>
                <div className="text-center">
                <button type="submit" className="btn mt-3 btn-secondary">
                    Sign Up
                  </button>

                  <p className='dont'>Already have an account?
                   <a href="/Login">Sign In</a></p>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Register;
