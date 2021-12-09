import {
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Button,
} from "react-bootstrap";
import { useAppSelector } from "../../app/hooks";

interface IProps {
  filterProduct: (ctionType: string) => void;
  searchKey: string;
  setSearchkeyData: (value: string) => void;
}

const CategoryNav = ({
  searchKey,
  setSearchkeyData,
  filterProduct,
}: IProps) => {
  const category = useAppSelector((state) => state.category.data);

  return (
    <Container style={{ marginTop: "70px" }}>
      <Row>
        <Col xs={12} lg={7}>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <div>
              {category &&
                category.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="nav-category d-inline-block me-2 bg-secondary bg-gradient text-light px-2 py-1 mt-2"
                      onClick={(e) => filterProduct(data)}
                    >
                      {data}
                    </div>
                  );
                })}
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          lg={5}
          className="d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0"
        >
          <Form className="nav-search-form d-flex mt-2">
            <FormControl
              type="search"
              placeholder="Search products"
              className="me-2"
              aria-label="Search"
              value={searchKey}
              onChange={(e) => setSearchkeyData(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryNav;
