import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';

const Gallery = () => {

    return (
        <div style={{ display: 'block', width: 800, padding: 30, margin: "auto" }}>
            <Carousel style={{ marginTop: "20px", background:"red"}}>
                <Carousel.Item>
                    <img
                        style={{
                            height: 400,
                            width: 800,
                            alignItems: "center"
                        }}
                        className="img-responsive center-block"
                        src="https://wallpaperaccess.com/full/3037905.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Valorant</h3>
                        <p>A 5v5 character-based tactical shooter.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            height: 400,
                            width: 800,
                            alignItems: "center"
                        }}
                        className="img-responsive center-block"
                        src="https://fondosmil.com/fondo/13483.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>FIFA 22</h3>
                        <p>on PlayStation 5, Xbox Series X|S.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            height: 400,
                            width: 800,
                            alignItems: "center"
                        }}
                        className="img-responsive center-block"
                        src="https://fondosmil.com/fondo/26600.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Overwatch 2</h3>
                        <p>
                            free-to-play online-only multiplayer first-person shooter.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Gallery;