import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const redirectMe = (path: string) => {
    history.push(path);
  };

  return (
    <>
      <div>
        <Navbar bg="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand className="text-light cursor-pointer">
              Black Tech
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <div>
                <a
                  className="text-light ms-2 text-decoration-none cursor-pointer"
                  onClick={(e) => redirectMe("/")}
                >
                  Home
                </a>
                <a
                  className="text-light ms-2 text-decoration-none cursor-pointer"
                  onClick={(e) => redirectMe("/cart")}
                >
                  cart
                </a>
                <a
                  className="text-light ms-2 text-decoration-none cursor-pointer"
                  onClick={(e) => redirectMe("/")}
                >
                  logout
                </a>
                <a
                  className="text-light ms-2 text-decoration-none cursor-pointer"
                  onClick={(e) => redirectMe("/user")}
                >
                  User
                </a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default NavBar;
