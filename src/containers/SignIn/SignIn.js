import React from 'react';
import {Button , FormControlLabel,Checkbox ,Grid , Box} from '@material-ui/core';
import {Typography , Container , makeStyles } from '@material-ui/core';
import MV from '../../assets/png/MVHunger.png'
import {Link} from 'react-router-dom'
import './SignIn.css'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  
}));

const SignUp = () => {
  const classes = useStyles();

  return (
      <div className="SignIn">
          
        <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
            <img src={MV} width="300px" alt="logo" />
            <Typography component="h1" variant="h5" className="signUP">
            Sign-In
            </Typography>
            <form className={classes.form}>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                <input
                    className="InputField"
                    placeholder="Email Address*"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />
                </Grid>
                <Grid item xs={12}>
                <input
                    className="InputField"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    placeholder="Password*"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                </Grid>
                <Link to="forgotPassword@?!"  style={{fontSize:"15px" , marginLeft:"15px"}} >
                    Forgot Password ?
                </Link>
                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Remember Me"
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                <Link to="/sign-up" style={{fontSize:"15px" , marginLeft:"15px"}} >
                    Don't have an account? Sign up
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <Box mt={5}>
        <Typography variant="body2" style={{color:"white"}} align="center">
        <Link style={{color:"orange " }} variant="body1" href="/">
            MV-Hunger
        </Link>{'@reg;'}
        {new Date().getFullYear()}
        </Typography>
        </Box>
        </Container>
    </div>
    
  );
}
export default SignUp