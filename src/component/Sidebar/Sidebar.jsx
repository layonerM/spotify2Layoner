import { Button, Container } from "reactstrap";
import { BsSpotify } from "react-icons/bs";
import { MdOutlineHome, MdOutlineSearch } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { BsPlusSquareFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import SidebarCard from "./SidebarComponent";
import { BiHeartSquare } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../recoil";
import { AiFillHeart } from "react-icons/ai";

const Sidebar = () => {
  const user = useRecoilValue(userAtom);

  return (
    <>
      <div className="vh-100 bg-black text-center ps-3">
        <Container className="d-flex flex-column p-0 ">
          <Container className="p-0 d-flex flex-column justify-content-between vh-100 ">
            <div>
              <div className="ps-2 pt-4 d-flex align-items-center mb-4">
                <BsSpotify size={40} />
                <span className="ms-2 fw-bold fs-3">Spotify</span>
              </div>
              <div>
                <Container className="d-flex flex-column line-clamp">
                  <SidebarCard path="/">
                    <MdOutlineHome size={24} className="me-3" />
                    <span className="line-clamp">Home</span>
                  </SidebarCard>
                  <SidebarCard path="/search">
                    <MdOutlineSearch size={24} className="me-3" />
                    <span className="line-clamp">Search</span>
                  </SidebarCard>
                  <SidebarCard path="/library">
                    <VscLibrary size={24} className="me-3" />
                    <span className="line-clamp">Library</span>
                  </SidebarCard>
                </Container>
                <Container className="d-flex flex-column mt-3 mb-auto">
                  <SidebarCard path="/library">
                    <BsPlusSquareFill size={22} className="me-3" />
                    <span className="line-clamp">Create Playlist</span>
                  </SidebarCard>
                  <SidebarCard path="/library">
                    <AiFillHeart
                      size={24}
                      className="gradient-icon p-1 me-3 "
                    />
                    <span className="line-clamp">Liked Songs</span>
                  </SidebarCard>
                </Container>
              </div>
            </div>

            {!user.user && (
              <Container className="">
                <div className="fs-6 text-gray d-flex flex-column ">
                  <div className="text-start mb-3 text-secondary fs-5">
                    <span className="fs-6 fw-light me-2">Legal </span>
                    <span className="fs-6 fw-light me-2">Privacy Center </span>
                    <br />
                    <span className="fs-6 fw-light me-2">Privacy Policy </span>
                    <span className="fs-6 fw-light me-2">Cookies </span>
                    <br />
                    <span className="fs-6 fw-light me-2">About Ads</span>
                    <br />
                    <span className="fs-6 fw-light me-2">Cookies </span>
                  </div>
                  <Button className="rounded-5 m-2 border border-white bg-black text-white btn-hover me-2 fw-semibold fs-6 col-10">
                    <BsGlobe size={24} className="me-1" />
                    English
                  </Button>
                </div>
              </Container>
            )}
          </Container>
        </Container>
      </div>
    </>
  );
};

export default Sidebar;
