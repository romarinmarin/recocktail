import React from "react";
import { useParams } from "react-router-dom";

export default function SingleCocktail() {
  const { id } = useParams();
  console.log(id);
  return <h1>single cocktail page</h1>;
}
