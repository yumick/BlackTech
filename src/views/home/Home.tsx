import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import CategoryNav from "../../components/nav/CategoryNav";
import SingleProduct from "../../components/product/SignleProduct";

const Home = () => {
  const products = useAppSelector((state) => state.products.data);
  const [searchKey, setSearchKey] = useState<string>("");
  const [filterCat, setFilterCat] = useState("all product");

  const setSearchKeyData = (value: string) => {
    setSearchKey(value);
  };
  const filterProducts = (actionType: string) => {
    setFilterCat(actionType);
  };

  return (
    <>
      <CategoryNav
        searchKey={searchKey}
        setSearchkeyData={setSearchKeyData}
        filterProduct={filterProducts}
      />
      <Container>
        <Row>
          <Col>
            <h4 className="text-center mt-4">View all the products</h4>
          </Col>
        </Row>
        <Row className="mt-2">
          {products &&
            products
              .filter((productData) => {
                if (filterCat === "all product") {
                  return productData;
                } else if (productData.category === filterCat) {
                  return productData;
                }
              })
              .map((data, index) => {
                return (
                  <Col xs={12} md={6} lg={4} xl={3} key={index}>
                    <Link
                      to={`/product/${data.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <SingleProduct data={data} />
                    </Link>
                  </Col>
                );
              })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
