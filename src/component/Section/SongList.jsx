import { AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";

const SongList = ({ name, artist, duration, image_url }) => {
  return (
    <>
      <div className="d-flex align-items-center mb-3 song-hover">
        <div className=" d-flex align-items-center me-auto ">
          <img src={image_url} style={{ width: "40px", height: "40px" }} />
          <div className="ms-2 d-flex flex-column">
            <span className="p-0 m-0 fw-semibold">{name}</span>
            <span style={{ fontSize: "0.9rem" }}>{artist}</span>
          </div>
        </div>
        <div className="d-flex align-items-center me-3 ">
          <span className="me-5">
            <AiOutlineHeart size={20} className="hide-icon" />
          </span>
          <span className="me-2">{duration}</span>
          <span>
            <AiOutlineEllipsis size={20} fill="white" className="hide-icon" />
          </span>
        </div>
      </div>
    </>
  );
};

export default SongList;
