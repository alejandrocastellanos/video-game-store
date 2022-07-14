import React from 'react';
import {Box, Grid, Link, Typography} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
      <>
          <Grid
              mt={7}
              pt={2}
              container
              spacing={0}
              direction="row"
              alignItems="center"
              justifyContent="center"
              bgcolor="rgba(255, 255, 255, 0.08)"
          >
              <Grid item sm={4} xs={6} mb={2} sx={{ textAlign: "center"}}>
                  <Box sx={{ flexGrow: 1 }}>
                      <SportsEsportsIcon />
                      <Typography variant="h6" component="div" sx={{ display: {xs: "none", sm: "none", md: "block"}}}>
                          VideoGame Store
                      </Typography>
                  </Box>
              </Grid>
              <Grid item sm={4} xs={6} mb={2} sx={{ textAlign: "center"}}>
                  <Link
                      href="https://www.linkedin.com/in/alejo-castellanos/"
                      target="_blank"
                      sx={{color:"white"}}
                  >
                      <LinkedInIcon/>
                  </Link>
                  <Link
                      href="https://twitter.com/alejocas10"
                      target="_blank"
                      sx={{color:"white"}}
                  >
                      <TwitterIcon/>
                  </Link>
                  <Link
                      href="https://www.linkedin.com/in/alejo-castellanos/"
                      target="_blank"
                      sx={{color:"white"}}
                  >
                      <EmailIcon/>
                  </Link>
              </Grid>
              <Grid item sm={4} xs={6} mb={2} sx={{ textAlign: "center"}}>
                  © 2022 - All rights reserved.
              </Grid>
          </Grid>
      </>
  );
}

export default Footer;