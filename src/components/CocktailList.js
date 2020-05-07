import React from "react";
import Cocktail from "../components/Cocktail";

export default function CocktailList({ drinks, loading }) {
  const cocktails = drinks.map((drink) => (
    <Cocktail key={drink.id} drink={drink} />
  ));
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (drinks.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  } else {
    return (
      <section className="section">
        <h2 className="section-title">cocktails</h2>
        <div className="cocktails-center">{cocktails}</div>
      </section>
    );
  }
}
