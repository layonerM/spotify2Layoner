import { Button, Row } from "reactstrap";

const LoginWithButton = ({ children }) => {
  return (
    <>
      <Row className="p-0 m-0 ">
        <Button className=" rounded-4 bg-black text-white border-1 border-secondary mb-2 d-flex align-items-center pe-5 ps-4 fw-semibold py-2 login-social-button">
          {children}
        </Button>
      </Row>
    </>
  );
};

const NavButton = ({ children }) => {
  return (
    <Button className="fw-semibold rounded-5 m-2 border-0 btn-hover me-2">
      {children}
    </Button>
  );
};

export { LoginWithButton, NavButton };
