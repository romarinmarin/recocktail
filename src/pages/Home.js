import React, { useState, useEffect } from "react";

const cocktailsArray = [];

export default function Home() {
  const [cocktails, setCocktails] = useState(cocktailsArray);

  // useEffect(() => {
  //   fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
  //     .then((resp) => resp.json())
  //     .then((drinks) => {
  //       const newDrinks = drinks.drinks.map((drink) => {
  //         const { strDrink, strIngredient1 } = drink;
  //         return { name: strDrink, indredients: strIngredient1 };
  //       });
  //       setCocktails(newDrinks);
  //     });
  //   return () => {};
  // }, [cocktails]);

  useEffect(() => {
    async function getCocktails() {
      const res = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"
      );
      const drinks = await res.json();
      const newDrinks = drinks.drinks.map((drink) => {
        const { strDrink, strIngredient1 } = drink;
        return { name: strDrink, indredients: strIngredient1 };
      });
      await setCocktails(newDrinks);
    }
    getCocktails();
  }, [cocktails]);

  return <h1>error page</h1>;
}
