import React from 'react';
import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import Header from "./component/Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import MusicBar from "./component/Section/MusicBar";
import { userAtom } from "./recoil";
import AudioPlayer from './component/Section/AudioPlayer';
import { useRecoilValue } from "recoil";

function App() {
  const user = useRecoilValue(userAtom);


  const track = {
    title: 'drivers license',
    src: '/songs/Doce Rosas.mp3'  
  };

  return (
    <>
      <Container fluid className="p-0 m-0">
        <Row className="m-0 p-0 ">
          <Col md={2} className="position-fixed m-0 p-0">
            <Sidebar />
          </Col>
          <Col md={10} className="p-0 offset-2 ">
            <Header />
            <Outlet />
            <Footer />
          </Col>
          {user.user && <MusicBar />}
        </Row>
      </Container>
      
      {}
      {user.user && <AudioPlayer track={track} />}
    </>
  );
}

export default App;
