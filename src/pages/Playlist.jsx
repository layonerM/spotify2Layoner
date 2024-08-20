import { BsFillPlayFill, BsSpotify } from "react-icons/bs";
import { Button, Col, Container, Row, Table } from "reactstrap";
import { VscEllipsis } from "react-icons/vsc";
import { GiHearts } from "react-icons/gi";
import {
  AiOutlineClockCircle,
  AiOutlineEllipsis,
  AiOutlineHeart,
} from "react-icons/ai";
import JsonData from "../data/data.json";
import { songAtom, musicBarAtom } from "../recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Playlist = () => {
  const playlist = useRecoilValue(songAtom);
  const setMusicBarValue = useSetRecoilState(musicBarAtom);
  const data = playlist;
  const totalSongs = [...data.songs]?.length;
  const songs = JsonData.songs;
  return (
    <>
      <Container fluid className="px-4 mt-4">
        <Row className="m-0 p-0">
          <Col md={6} lg={4} xl={3} className="m-0 p-0 ">
            <img
              src={data.image_url}
              style={{ width: "auto", height: "auto" }}
            />
          </Col>
          <Col md={6} lg={8} xl={9} className="mt-5 d-flex flex-column">
            <span>Playlist</span>
            <span
              className="m-0 p-0 fw-bold line-clamp"
              style={{ fontSize: "90px" }}
            >
              {data.name}
            </span>
            <span>{data.description}</span>
            <div className="d-flex align-items-center">
              {data.artist && (
                <span className="me-1 fw-semibold">{data.artist}</span>
              )}
              {!data.artist && (
                <div className=" d-flex align-items-center ">
                  <BsSpotify size={20} />
                  <span className="ms-1 fw-bold">Spotify</span>
                </div>
              )}
              <span>•</span>
              <span className="mx-1">
                {totalSongs}
                {totalSongs > 1 ? " songs" : " song"}{" "}
              </span>
              <span>•</span>
              <span className="ms-1 text-secondary">1 hr 30 min</span>
            </div>
          </Col>
        </Row>
        <Col className="mt-5 d-flex align-items-center">
          <Button
            className="rounded-circle border-0  bottom-0 end-0 me-4"
            style={{
              backgroundColor: "#1ed661",
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
          <GiHearts size={32} className="me-4 text-danger" />
          <VscEllipsis size={24} className="fw-semibold " />
        </Col>
        <Col className="mt-4">
          <Table borderless className="text-secondary">
            <thead className=" border-bottom border-2 border-dark">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Album</th>
                <th>Data Added</th>
                <th className="d-flex justify-content-center ms-5">
                  <AiOutlineClockCircle />
                </th>
              </tr>
            </thead>

            <tbody className="fs-6">
              {data.songs.map((id, index) => {
                const { name, album, duration, image_url, artist } = songs[id];
                return (
                  <tr
                    key={index}
                    onClick={() =>
                      setMusicBarValue({ name, image_url, artist })
                    }
                    className="song-hover"
                  >
                    <th scope="row">{index + 1}</th>
                    <td>
                      <div className="d-flex ">
                        <img
                          src={image_url}
                          style={{ width: "40px", height: "40px" }}
                          className="me-3"
                        />
                        <div className="d-flex flex-column">
                          <span className="fw-semibold text-white">{name}</span>
                          <span className="gray-color">{artist}</span>
                        </div>
                      </div>
                    </td>
                    <td className="gray-color">{album}</td>
                    <td className="gray-color-without-hover">Today</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center gray-color-without-hover">
                        <span className="me-5">
                          <AiOutlineHeart size={20} className="hide-icon" />
                        </span>
                        <span className="me-3">{duration}</span>
                        <span>
                          <AiOutlineEllipsis size={20} className="hide-icon" />
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Container>
    </>
  );
};

export default Playlist;
