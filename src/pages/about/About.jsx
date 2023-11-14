import React, {useState} from "react";
import {Container, Row, Col, Figure, Button} from "react-bootstrap";
import Img from "./../../assets/PF/CorporateHalf.png";
import CV from "./../../assets/CV/WD Resume.pdf";
import "./../../style/style.css";
import YouTube from "react-youtube";

function About() {
  const [videos, setVideos] = useState([
    {
      id: "P-CEczROpmE?si=gn0_SLD0Ag2g-WXm",
      systemName:
        "MERN Stack & Redux Inventory System - CRUD, Audit Logs, and Dynamic Charts",
    },
    {
      id: "9DMwCDxthus?si=1IFpUc5wy7Z0prLV",
      systemName: "Log-in modal using Javascript, Ajax, PHP and MySQL",
    },
  ]);

  const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <main className='container-fluid p-0 m-0'>
        <section className='container-fluid bg-dark pt-5 mb-0'>
          <Container className='d-md-flex justify-content-center align-items-center'>
            <Figure className='p-0 m-0 w-100 d-flex align-item-center justify-content-center'>
              <Figure.Image src={Img} alt={Img} width={400} />
            </Figure>
            <section className='p-2 p-md-0'>
              <p className='text-light m-auto'>
                Welcome to my portfolio! Explore my projects and achievements,
                all in one place. I'm excited to share my skills and work with
                you.
              </p>
              <a href={CV} download='CV'>
                <Button variant='primary' className='my-3 tada'>
                  Here's my CV
                </Button>
              </a>
            </section>
          </Container>
        </section>

        <Container className='' fluid>
          <header>
            <h3 className='text-center mt-5'>Projects Demo</h3>
            <p className='text-center'>
              <a
                href='https://www.youtube.com/channel/UCTgwmp5DAlCWtEJkkXHTRyg'
                style={{textDecoration: "none"}}
                className='text-danger'
                target='_blank'
                rel='noopener noreferrer'
              >
                YouTube Channel
              </a>
            </p>
          </header>
          <Row xs={1} lg={3}>
            {videos &&
              videos.map((video, index) => (
                <Col key={index}>
                  <div>
                    <h6
                      className='my-3'
                      style={{
                        whiteSpace: "nowrap",
                        overflowX: "auto",
                        maxWidth: "100%",
                      }}
                    >
                      {video.systemName}
                    </h6>
                    <YouTube videoId={video.id} opts={opts} className='p-1' />
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default About;
