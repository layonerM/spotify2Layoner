import { Button, Col, Container, Row } from "reactstrap";
import { PlaylistCard } from "../Card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
const PlayListSection = ({ title, data }) => {
  const shuffleData = shuffle(data);
  const [toggleValue, setToggleValue] = useState("flex-nowrap");
  const toggleShow = () => {
    setToggleValue(toggleValue === "flex-nowrap" ? "flex-wrap" : "flex-nowrap");
  };

  return (
    <>
      <Container fluid className="px-4 mt-4">
        <div className="d-flex justify-content-between ">
          <h4 className="fw-bold">{title}</h4>
          <Button className="bg-transparent border-0" onClick={toggleShow}>
            Show all
          </Button>
        </div>
        <Row className={`no-gutters m-0 p-0 overflow-hidden ${toggleValue}`}>
          {shuffleData.map((item) => (
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className="my-3 gap-0"
              key={item.id}
            >
              <Link
                className="text-decoration-none"
                to={`/playlist/${item.id + "xyseffea235fe1"}`}
                state={{ data: item, itemId: item.id }}
              >
                <PlaylistCard item={item} roundedImage="" />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default PlayListSection;

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
