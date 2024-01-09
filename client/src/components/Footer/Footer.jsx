import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            sit, magnam quae iusto laborum voluptates voluptatem, temporibus vel
            ea impedit accusantium saepe architecto porro ipsa quia odio dolore,
            hic possimus.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quasi
            voluptates perspiciatis quo veniam neque est quam maxime aliquam
            expedita, ducimus optio autem debitis dignissimos dolore iusto eaque
            magnam saepe?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">KINGSCOUTURE</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
