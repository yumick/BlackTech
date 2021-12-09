import { IProduct } from "../../interface/product";
import ReactStars from "react-rating-stars-component";

interface IProps {
  data: IProduct;
}

const SingleProduct = ({ data }: IProps) => {
  return (
    <div className="img-main-container cursor-pointer shadow mt-2">
      <div className="product-img-container px-2">
        <div className="product-img-holder">
          <img src={data.image} className="product-img" />
        </div>
      </div>
      <div className="px-2 pt-2">
        <ReactStars
          count={5}
          value={data.rating.rate}
          edit={true}
          size={24}
          activeColor="#ffd700"
        />
        <p className="text-dark">{data.title}</p>
        <p className="color-orange h5">Rs. {data.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
