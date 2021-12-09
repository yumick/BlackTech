import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { IProduct } from "../../interface/product";
import { getSingleProducts } from "../../services/product";
import ReactStars from "react-rating-stars-component";
import LoadingProgress from "../../components/loadingProgress";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState<IProduct>();
  const history = useHistory();

  const setProductData = async () => {
    try {
      const productData = await getSingleProducts(productId);
      setProduct(productData);
    } catch {
      toast.error("Invalid product id.");
      history.push("/");
    }
  };

  useEffect(() => {
    setProductData();
  }, []);

  const addToCart = () => {
    toast.success("This product is added to cart.");
    history.push("/");
  };
  const buyNow = () => {
    toast.success(
      "Thank you so much. You have successfully bought this product."
    );
    history.push("/");
  };

  if (!product) {
    return <LoadingProgress />;
  }

  return (
    <>
      <div className="d-flex m-auto" style={{ maxWidth: "1100px" }}>
        <Container style={{ marginTop: "80px" }}>
          <Row>
            <Col md={6}>
              <img
                src={product && product.image}
                alt="product image"
                style={{ width: "100%", maxWidth: "350px" }}
              />
            </Col>
            <Col md={6} className="d-flex align-items-center mt-4 mt-md-0">
              <div>
                <div>
                  <h5>{product && product.title}</h5>
                  <hr />
                  <ReactStars
                    count={5}
                    value={product && product.rating.rate}
                    eidt={false}
                    size={50}
                    activeColor="#ffd700"
                  />
                  <h1>Rs. {product && product.price.toFixed()}</h1>
                  <p>{product && product.description}</p>
                  <button className="btn btn-danger mt-3" onClick={addToCart}>
                    Add to cart
                  </button>
                  <button
                    className="btn btn-success ms-3 mt-3"
                    onClick={buyNow}
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductDetails;
