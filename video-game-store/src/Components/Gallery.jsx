import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';
import {Box} from "@mui/material";

const Gallery = () => {

    return (
        <div className="inner" >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="img-responsive inner-image"
                        src="https://wallpaperaccess.com/full/3037905.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Box sx={{ display: { xs: "none", sm: "block"}}}>
                            <h3>Valorant</h3>
                            <p>A 5v5 character-based tactical shooter.</p>
                        </Box>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-responsive inner-image"
                        src="https://fondosmil.com/fondo/13483.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <Box sx={{ display: { xs: "none", sm: "block"}}}>
                            <h3>FIFA 22</h3>
                            <p>on PlayStation 5, Xbox Series X|S.</p>
                        </Box>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-responsive inner-image"
                        src="https://fondosmil.com/fondo/26600.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Box sx={{ display: { xs: "none", sm: "block"}}}>
                            <h3>Overwatch 2</h3>
                            <p>
                                free-to-play online-only multiplayer first-person shooter.
                            </p>
                        </Box>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Gallery;