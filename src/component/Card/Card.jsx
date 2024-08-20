import { BsFillPlayFill } from "react-icons/bs";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { songAtom } from "../../recoil";
import { useSetRecoilState } from "recoil";

const PlaylistCard = ({ item, roundedImage }) => {
  const setPlaylist = useSetRecoilState(songAtom);
  const handleSetSong = () => {
    setPlaylist(item);
  };

  return (
    <Card
      onClick={handleSetSong}
      className="px-3 py-3"
      style={{
        width: "100%",
        height: "auto",
        minWidth: "150px",
        maxWidth: "200px",
        backgroundColor: "#191919",
        overflow: "hidden",
      }}
    >
      <div className="position-relative">
        <img
          alt={item.name}
          src={item.image_url}
          className={`card-img-top ${roundedImage}`}
          style={{ height: "auto", width: "100%" }}
        />

        <Button
          className="rounded-circle border-0 position-absolute bottom-0 end-0 playButton"
          style={{
            width: "10vw",
            height: "10vw",
            minWidth: "50px",
            minHeight: "50px",
            maxWidth: "50px",
            maxHeight: "50px",
          }}
        >
          <BsFillPlayFill size={30} color="black" />
        </Button>
      </div>

      <CardBody className="p-0 pt-3">
        <CardTitle tag="h6" className="fw-bold text-white line-clamp">
          {item.name}
        </CardTitle>
        <CardSubtitle className=" text-muted line-clamp" tag="h6">
          {item.artist || item.description || "Artist"}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

const HomepageLongCard = ({ item }) => {
  const setPlaylist = useSetRecoilState(songAtom);
  const handleSetSong = () => {
    setPlaylist(item);
  };

  return (
    <Card
      onClick={handleSetSong}
      className="  justify-content-center longCard mb-3  p-0 m-0"
      style={{
        // maxWidth: "27.5rem",
        height: "auto",
        backgroundColor: "#191919",
        overflow: "hidden",
      }}
    >
      <Row
        className=" align-items-center p-0 m-0  w-100"
        style={{ width: "23rem" }}
      >
        <Col className="col-3 p-0 m-0  ">
          <img
            alt="item.name"
            src={item.image_url}
            className="card-img-top "
            style={{ height: "5rem", width: "5rem" }}
          />
        </Col>

        <Col className="col-7  position-relative   ">
          <CardTitle tag="h6" className="fw-bold text-white line-clamp">
            {item.name}
          </CardTitle>
        </Col>

        <Col className=" d-flex col-2 m-0 p-0  ">
          <Button
            className="d-flex align-items-center rounded-circle playButton2"
            style={{
              width: "10vw",
              height: "10vw",
              minWidth: "50px",
              minHeight: "50px",
              maxWidth: "50px",
              maxHeight: "50px",
              backgroundColor: "#1ed661",
            }}
          >
            <BsFillPlayFill size={30} color="black" />
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

const SearchCard = ({ image_url, name }) => {
  return (
    <>
      <Col className=" col-3 m-0 p-0">
        <Container fluid>
          <h2 className="fw-semibold" style={{ fontSize: "1.5rem" }}>
            Top result
          </h2>
          <Card
            className="p-4 w-auto h-auto"
            // style={{ width: "372px", height: "237px" }}
          >
            <Row className=" m-0 row-4  p-0">
              <div
                className="border-0 rounded-circle p-0 m-0"
                style={{ width: "92px", height: "92px" }}
              >
                <img
                  src={image_url}
                  className="rounded-circle"
                  style={{ width: "92px", height: "92px" }}
                />
              </div>
            </Row>

            <Row className="m-0  row-4 ">
              <h2 className="my-3 fw-bold p-0">{name}</h2>
            </Row>

            <Row className="m-0 row-4 m-">
              <span className="border-0 fw-semibold bg-black rounded-5 w-auto">
                Artist
              </span>
            </Row>
          </Card>
        </Container>
      </Col>
    </>
  );
};

export { PlaylistCard, HomepageLongCard, SearchCard };
