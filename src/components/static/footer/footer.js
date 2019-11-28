import React, { Component } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles( theme =>({
  footer: {
    position: 'fixed',  
    bottom : 0,
    padding: 20,
    borderRadius: 10,
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'  Verizon Wireless. All rights reserved'}
    </Typography>
  );
}
function ContactUs() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link href="">
        Contact Us
      </Link>
    </Typography>
  );
}
class Footer extends Component {
  classes = useStyles();
  render() {
    return (
      <div className={this.classes.footer}>
        <Box>
          <ContactUs />
          <Copyright />
        </Box>
      </div>
    );
  }
}

export default Footer;
