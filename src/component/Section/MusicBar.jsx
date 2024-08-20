import { MdPictureInPictureAlt, MdPlayCircleFilled } from "react-icons/md";
import { Col, Container, Progress, Row } from "reactstrap";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsList, BsShuffle } from "react-icons/bs";
import { IoIosSkipForward, IoIosSkipBackward } from "react-icons/io";
import { TbDevices2 } from "react-icons/tb";
import { BiVolumeFull } from "react-icons/bi";
import { musicBarAtom } from "../../recoil";
import { useRecoilValue } from "recoil";
import { TiArrowLoop } from "react-icons/ti";
const MusicBar = () => {
  const musicBar = useRecoilValue(musicBarAtom);

  let image_url, name, artist;
  if (musicBar) {
    image_url = musicBar.image_url;
    name = musicBar.name;
    artist = musicBar.artist;
  }

  console.log(musicBar);
  const image =
    image_url ||
    "https://i.scdn.co/image/ab67616d00001e02bdcc1b27dac22bfb3a57c2de";
  const songName = name || "this is how you fall in love";
  const artistName = artist || "Jeremy Zucker";
  return (
    <>
      <Container
        fluid
        className="bg-black z-3 position-sticky bottom-0 text-secondary p-0 m-0 "
      >
        <Row className="d-flex justify-content-between p-1 align-items-center m-0">
          <Col className=" m-0">
            <Row className="p-0 m-0">
              <Col md={4} xl={2} className="col-4">
                <img
                  src={image}
                  alt="musicbar-image"
                  width="56px"
                  height="56px"
                />
              </Col>
              <Col className="col-5 p-0 m-0">
                <div className="d-flex flex-column  mt-2">
                  <span
                    className="fw-semibold text-white line-clamp"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {songName}
                  </span>
                  <span
                    className="line-clamp"
                    style={{ fontSize: "0.75rem", color: "#b3b3b3" }}
                  >
                    {artistName}
                  </span>
                </div>
              </Col>
              <Col className="col-3 d-flex align-items-center">
                <AiOutlineHeart size={20} className="me-3 music-bar-icons" />
                <MdPictureInPictureAlt size={20} className=" music-bar-icons" />
              </Col>
            </Row>
          </Col>
          <Col className="m-0  col-6 d-flex flex-column align-items-center justify-content-center ">
            <Row className="row-6 ">
              <div className="d-flex align-items-center gap-3">
                <BsShuffle size={20} className=" music-bar-icons" />
                <IoIosSkipBackward size={25} className=" music-bar-icons" />
                <MdPlayCircleFilled size={40} color="white" />
                <IoIosSkipForward size={25} className=" music-bar-icons" />
                <TiArrowLoop
                  size={25}
                  className=" music-bar-icons"
                  style={{ transform: "rotate(180deg)" }}
                />
              </div>
            </Row>
            <Row className="m-0 row-6 w-100">
              <div
                className="d-flex align-items-center justify-content-center "
                style={{ color: "#b3b3b3", fontSize: "0.8rem" }}
              >
                <span>1:15</span>
                <Progress
                  color="white"
                  className="my-3 bg-dark mx-2"
                  style={{
                    height: "4px",
                    width: "75%",
                  }}
                  value={45}
                />
                <span>3:05</span>
              </div>
            </Row>
          </Col>
          <Col className="col-2 m-0">
            <div className="d-flex align-items-center gap-2 justify-content-end">
              <BsList size={20} className=" music-bar-icons" />
              <TbDevices2 size={20} className=" music-bar-icons" />
              <BiVolumeFull size={20} className=" music-bar-icons" />
              <Progress
                color="white"
                className="my-3 bg-dark mx-2 bar"
                style={{
                  height: "4px",
                  width: "50%",
                }}
                value={45}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MusicBar;
