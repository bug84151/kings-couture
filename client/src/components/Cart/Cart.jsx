import "./Cart.scss"
import { DeleteOutline } from "@mui/icons-material";

const Cart = () => {
    const data = [
      {
        id: 1,
        img: "https://images.pexels.com/photos/12725050/pexels-photo-12725050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/19374318/pexels-photo-19374318/free-photo-of-nike-air-jordan-i-in-with-green-elements.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s",
        isNew: true,
        title: "Dunks",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci et, corporis excepturi",
        oldPrice: "3500",
        price: "2000",
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/1390602/pexels-photo-1390602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://media.istockphoto.com/id/1035397756/nl/foto/elegante-en-moderne-aziatische-vertrouwen-zakenvrouw-in-lookbook-stijl-ge%C3%AFsoleerd-op-witte.jpg?s=1024x1024&w=is&k=20&c=JBBAZAkL9ATSN7SR1yTKInEu9HaV-XWJjnV0HK8G5YU=",
        isNew: true,
        title: "Red Armani suit",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci et, corporis excepturi",
        oldPrice: "5000",
        price: "3500",
      },
    ];
  return (
      <div className="cart">
          <h1>Products in your cart</h1>
          {data?.map(item =>(
              <div className="item" key={item.id}>
                  <img src={item.img} alt="" />
                  <div className="details">
                      <h1>{item.title}</h1>
                      <p>{item.desc?.substring(0, 100)}</p>
                      <div className="price">1 x ${item.price }</div>
                  </div>
                   <DeleteOutline className="delete"/>
          </div>
          ))}
          <div className="total">
              <span>SUBTOTAL</span>
              <span>$324</span>
          </div>
          <button>PROCEED TO CHECKOUT</button>
          <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart