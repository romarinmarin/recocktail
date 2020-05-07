import React, { useState, useEffect } from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const cocktailsArray = [];

export default function Home() {
  const [cocktails, setCocktails] = useState(cocktailsArray);
  const [loading, setLoading] = useState(true);
  const [searchTerms, setSearchTerms] = useState("a");

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerms}`
        );
        const { drinks } = await res.json();
        if (drinks) {
          const newDrinks = drinks.map((drink) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = drink;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktails(newDrinks);
        } else {
          setCocktails([]);
        }
      } catch (err) {
        console.log(err);
      }
      await setLoading(false);
    };
    getCocktails();
  }, [searchTerms]);

  return (
    <>
      <SearchForm setSearchTerms={setSearchTerms} />

      <CocktailList loading={loading} drinks={cocktails} />
    </>
  );
}
