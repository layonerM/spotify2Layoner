import { Button, Col, Container, Row } from "reactstrap";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
export default function Footer() {
  return (
    <>
      <Container fluid className="mt-5 px-4">
        <Row className="d-flex justify-content-between">
          <div className="d-flex ">
            <Col md={2} className="d-flex flex-column">
              <span className="fw-bold mb-2">Company</span>
              <span className=" text-secondary mb-2">About</span>
              <span className=" mb-2 text-secondary">Jobs</span>
              <span className=" mb-2 text-secondary">For the Record</span>
            </Col>

            <Col md={2} className="d-flex flex-column">
              <span className="fw-bold mb-2">Communities</span>
              <span className=" mb-2 text-secondary">For Artists</span>
              <span className=" mb-2 text-secondary">Developers</span>
              <span className=" mb-2 text-secondary">Advertising</span>
              <span className=" mb-2 text-secondary">Inverstors</span>
              <span className=" mb-2 text-secondary">Vendors</span>
              <span className=" mb-2 text-secondary">Spotify for Work</span>
            </Col>

            <Col md={2} className="d-flex flex-column">
              <span className="fw-bold mb-2">Useful links</span>
              <span className=" mb-2 text-secondary">Support</span>
              <span className=" mb-2 text-secondary">Fre Mobile App</span>
            </Col>

            <Col md={2} className="offset-4">
              <div className="d-flex justify-content-end">
                <Button
                  className="rounded-circle me-3 border-0 d-flex justify-content-center align-items-center social-media-button"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgb(41,41,41)",
                  }}
                >
                  <BsInstagram />
                </Button>

                <Button
                  className="rounded-circle me-3 border-0 d-flex justify-content-center align-items-center social-media-button"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgb(41,41,41)",
                  }}
                >
                  <BsTwitter />
                </Button>

                <Button
                  className="rounded-circle me-3 border-0 d-flex justify-content-center align-items-center social-media-button"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgb(41,41,41)",
                  }}
                >
                  <BsFacebook />
                </Button>
              </div>
            </Col>
          </div>
        </Row>

        <hr />

        <Row className="mb-5 mt-4 text-secondary">
          <span>&copy; 2024 Spotify Layoner M </span>
        </Row>
      </Container>
    </>
  );
}
