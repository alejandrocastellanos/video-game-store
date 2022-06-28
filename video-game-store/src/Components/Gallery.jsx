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
                        src="https://images.pexels.com/photos/209679/pexels-photo-209679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        src="https://images.pexels.com/photos/245252/pexels-photo-245252.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                        src="https://images.pexels.com/photos/7476606/pexels-photo-7476606.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Gallery;