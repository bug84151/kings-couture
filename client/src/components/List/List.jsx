import React from "react";
import Card from "../Card/Card";
import "./List.scss";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/12725050/pexels-photo-12725050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/19374318/pexels-photo-19374318/free-photo-of-nike-air-jordan-i-in-with-green-elements.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s",
      isNew: true,
      title: "Dunks",
      oldPrice: "3500",
      price: "2000",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1390602/pexels-photo-1390602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://media.istockphoto.com/id/1035397756/nl/foto/elegante-en-moderne-aziatische-vertrouwen-zakenvrouw-in-lookbook-stijl-ge%C3%AFsoleerd-op-witte.jpg?s=1024x1024&w=is&k=20&c=JBBAZAkL9ATSN7SR1yTKInEu9HaV-XWJjnV0HK8G5YU=",
      isNew: true,
      title: "Red Armani suit",
      oldPrice: "5000",
      price: "3500",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/12513260/pexels-photo-12513260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Gucci leopard hat",
      oldPrice: "2000",
      price: "1650",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1105353/pexels-photo-1105353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Ankara dress",
      oldPrice: "3000",
      price: "1600",
    },
  ];

  return (
    <div className="list">
      {data.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default List;
