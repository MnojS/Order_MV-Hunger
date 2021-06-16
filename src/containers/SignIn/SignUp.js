import React from 'react';
import {Button , FormControlLabel,Checkbox ,Link ,Grid , Box} from '@material-ui/core';
import {Typography , Container , makeStyles } from '@material-ui/core';
import MV from '../../assets/png/MVHunger.png'
import './SignUp.css'



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
            Sign-up
            </Typography>
            <form className={classes.form}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                <input
                    className="InputField"
                    autoComplete="fname"
                    name="firstName"
                    placeholder="First Name*"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <input
                    className="InputField"
                    autoComplete="lname"
                    name="lasttName"
                    placeholder="Last Name*"
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                />
                </Grid>
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
                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I agree to all the terms and conditions"
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
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                <Link href="sign-in" variant="body2">
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <Box mt={5}>
        <Typography variant="body2" style={{color:"white"}} align="center">
        <Link style={{color:"orange " , }} variant="body1" href="/">
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