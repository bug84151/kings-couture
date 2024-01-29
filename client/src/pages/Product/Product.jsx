import { useState } from "react";
import "./Product.scss"

const Product = () => {

  const images = ["https://images.pexels.com/photos/2932731/pexels-photo-2932731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/2932804/pexels-photo-2932804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  
  const [selectedImg, setSelectedImg] = useState(0);
  return <div className="product">
    <div className="left">
      <div className="images">
        <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
        <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
      </div>
      <div className="mainImage">
        <img src={images[selectedImg]} alt="" />
      </div>
    </div>
    <div className="right"></div>
  </div>;
};

export default Product;
