import React from "react";

import { Category } from "../models";
import './cardCategory.css';


interface Props {
  category: Category;
}

const CardCategory = ({ category }: Props) => {
  return (
    <div className="card" key={category.title}>
      <h5 className="card__title">{category.title}</h5>
      <img src={category.icon} alt={category.title} />
      <ul className="card__list">
        {category.items.map((item) => (
          <li key={item} className="card__item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCategory;
