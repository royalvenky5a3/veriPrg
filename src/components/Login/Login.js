import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Lock from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

class Login extends Component {
  useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    login : {
  
    },
  }));
  render() {
    const classes = this.useStyles();
    return (
      <div className={classes.login}>
        {/* <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={this.classes.paper}>
            <Avatar className={this.classes.avatar}>
              <Lock />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
          </Typography>
            <form className={this.classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userId"
                label="User Id"
                name="userId"
                autoComplete="userId"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={this.classes.submit}
              >
                Sign In
            </Button>
            </form>
          </div>
        </Container> */}
        hello
      </div>
    );
  }
}

export default Login;
