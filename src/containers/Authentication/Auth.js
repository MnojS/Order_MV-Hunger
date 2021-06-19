import React, {useState, useEffect} from 'react'
import fire from '../../containers/Authentication/Firebase/Fire'
import Login from '../Login/Login'

function Signin() {
    const [user, setUser] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const [emailError, setEmailError] =useState("")
    const [passwordError, setPasswordError] =useState("")
    const [hasAccount, setHasAccount] =useState(false)
    
    
    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
    const clearErrors = () => {
        setPasswordError('');
        setEmailError('');
    }

    const handleLogin= () => {
        <h2>Login</h2>
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(error=>{
            switch(error.code){
                case "auth/invalid-email":
                case "auth/user-diabled":
                case "auth/user-not-found":
                    setEmailError(error.message)
                    break
                case "auth/wrog-password":
                    setPasswordError(error.message)
                    break
            }
        })
    }

    const handleSignup= () => {
        clearErrors()
        fire
        .auth()
        
        .createUserWithEmailAndPassword(email,password)
        .catch(error=>{
            switch(error.code){
                
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(error.message)
                    break
                case "auth/weak-password":
                    setPasswordError(error.message)
                    break

            }
        })
    }

    const handleLogout = () => {
        fire.auth.signOut();
    }

    const authListner = ()=> {
        fire.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs()
                setUser(user)
            }else{
                setUser("")
            }
        })
    }

    useEffect(()=>{
        authListner();
    },[])
    return (
        <div>
            
            <Login 
                email={email} 
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}/> 
            )
            
            
            
        
           
        </div>
    )
}

export default Signin
