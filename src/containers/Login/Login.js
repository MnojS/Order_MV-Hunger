import React from 'react'
import "./Login.css"
const login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;
   
    
    return (
       
         <section className="login">
            
            <div className="loginContainer">
                <h1 className="heading">
                {hasAccount ? (<span>Sign Up</span>): (<span>Sign In</span>)
} 
                </h1>
                <label>Username</label>
                <input
                  type="text"
                  autoFocus 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <br/>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                        <p>Don't have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ): (
                        <>
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>

                    )}
                </div>
            </div>
        </section>
        

       
    )
}

export default login
