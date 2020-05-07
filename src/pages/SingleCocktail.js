import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  const { id } = useParams();

  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCocktail() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const cocktails = await res.json();
        if (cocktails.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = cocktails.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newDrink = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setDrink(newDrink);
        } else {
          setDrink(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!drink) {
    return <h1>Sorry drink not found</h1>;
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = drink;

    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>

        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name}></img>
          <div className="drink-info">
            <p>name : {name}</p>
            <p>category: {category}</p>
            <p>info: {info}</p>
            <p>glass : {glass}</p>
            <p>instructions : {instructions}</p>
            <p>
              ingredients :{" "}
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
