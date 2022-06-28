import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const Cards = () => {
  return (
      <Grid item sm={3} xs={6}>
          <Card>
              <CardActionArea>
                  <CardMedia
                      component="img"
                      height="140"
                      image="https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="green iguana"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                      </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary">
                      Share
                  </Button>
              </CardActions>
          </Card>
      </Grid>
  );
}

export default Cards;