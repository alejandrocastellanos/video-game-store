import React from 'react';
import {Grid, Link, Typography} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
      <>
          <Grid
              mt={7}
              pt={2}
              pb={2}
              container
              spacing={0}
              direction="row"
              alignItems="center"
              justifyContent="center"
              bgcolor="rgba(255, 255, 255, 0.08)"
          >
              <Grid item xs={3} sx={{ textAlign: "left" }}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      <SportsEsportsIcon /> VideoGame Store
                  </Typography>
              </Grid>
              <Grid item xs={3} sx={{ textAlign: "center" }}>
                  <Link
                      href="#"
                      target="_blank"
                      sx={{color:"white"}}
                  >
                      <FacebookIcon/>
                  </Link>
                  <Link
                      href="#"
                      target="_blank"
                      sx={{color:"white"}}
                  >
                      <LinkedInIcon/>
                  </Link>
                  <Link
                      href="#"
                      target="_blank"
                      sx={{color:"white"}}
                  >
                      <TwitterIcon/>
                  </Link>
                  <Link
                      href="#"
                      target="_blank"
                      sx={{color:"white"}}
                  >
                      <EmailIcon/>
                  </Link>
              </Grid>
              <Grid item xs={3} sx={{ textAlign: "right" }}>
                  © 2022 - All rights reserved.
              </Grid>
          </Grid>
      </>
  );
}

export default Footer;