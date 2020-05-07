import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({ drink }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={drink.image} alt={drink.name} />
      </div>
      <div className="cocktail-footer">
        <h3> {drink.name}</h3>
        <h4>{drink.glass}</h4>
        <p>{drink.info}</p>
        <Link
          to={`/cocktail/${drink.id}`}
          className="btn btn-primary btn-details"
        >
          details
        </Link>
      </div>
    </article>
  );
}
