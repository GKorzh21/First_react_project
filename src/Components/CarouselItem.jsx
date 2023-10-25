import React from "react";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <img className="carousel-img" src={item.icon.default} />
    </div>
  );
};