import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Cards = ( props ) => {
  return (
      <Grid item sm={4} xs={6}>
          <Link to={ "/game/" + props.id } style={{ textDecoration: 'none' }}>
              <Card>
                  <CardActionArea>
                      <CardMedia
                          component="img"
                          height="170"
                          image={ props.image }
                          alt="green iguana"
                      />
                      <CardContent sx={{ display: { xs: "none", sm: "block"}}}>
                          <Typography gutterBottom variant="h5" component="div">
                              { props.title }
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                              { props.description }
                          </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                      <Button size="small" color="primary">
                          Share
                      </Button>
                  </CardActions>
              </Card>
          </Link>
      </Grid>
  );
}

export default Cards;