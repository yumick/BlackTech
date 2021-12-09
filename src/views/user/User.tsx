import { Col, Container, Row } from "react-bootstrap";
import { FaUserCog } from "react-icons/fa";

const User = () => {
  return (
    <>
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col lg={4}>
            <div className="card">
              <div className="m-auto">
                <FaUserCog fontSize={200} />
              </div>
              <div className="d-flex justify-content-center py-2">
                <div>
                  <p className="p-0 m-0  fw-bold">Name: Bishnu thapa</p>
                  <p className="p-0 m-0">Address: Kathmandu</p>
                  <p className="p-0 m-0">Phone: 9806131303</p>
                  <p className="p-0 m-0">Email: 9806131303</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <form className="card pb-3">
              <Container>
                <Row>
                  <Col sm={12} md={6} xl={4} className="mt-3">
                    <label htmlFor="name">First name*</label>
                    <input
                      className="form-control"
                      placeholder="First name"
                      required
                    />
                  </Col>
                  <Col sm={12} md={6} xl={4} className="mt-3">
                    <label htmlFor="name">Last name*</label>
                    <input
                      className="form-control"
                      placeholder="Last name"
                      required
                    />
                  </Col>
                  <Col sm={12} md={6} xl={4} className="mt-3">
                    <label htmlFor="name">email*</label>
                    <input
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </Col>
                  <Col sm={12} md={6} xl={4} className="mt-3">
                    <label htmlFor="name">Phone number*</label>
                    <input
                      className="form-control"
                      placeholder="Phone number"
                      required
                    />
                  </Col>
                  <Col sm={12} md={6} xl={4} className="mt-3">
                    <label htmlFor="name">City*</label>
                    <input
                      className="form-control"
                      placeholder="City"
                      required
                    />
                  </Col>
                  <Col sm={12} md={6} xl={4} className="mt-3">
                    <label htmlFor="name">Street*</label>
                    <input
                      className="form-control"
                      placeholder="Street"
                      required
                    />
                  </Col>
                  <Col sm={12} md={6} xl={4} className="mt-3">
                    <label htmlFor="name">Zipcode*</label>
                    <input
                      className="form-control"
                      placeholder="Zipcode"
                      required
                    />
                  </Col>
                  <Col sm={12} md={6} xl={4} className="mt-3">
                    <label htmlFor="name">Geolocation lat</label>
                    <input
                      className="form-control"
                      placeholder="Geolocation lat"
                    />
                  </Col>
                  <Col sm={12} md={6} xl={4} className="mt-3">
                    <label htmlFor="name">Geolocation long</label>
                    <input
                      className="form-control"
                      placeholder="Geolocation long"
                    />
                  </Col>
                  <Col>
                    <button
                      className="btn btn-success mt-4 float-end"
                      type="submit"
                    >
                      Update
                    </button>
                    <button className="btn btn-danger me-3 mt-4  float-end">
                      Reset
                    </button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default User;
