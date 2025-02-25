import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";

export const RecipeSearch = ({ gefilterdeReceptenInstellen }) => {
  const [searchField, setSearchField] = useState("");


  const matchedRecipes = data.hits.filter(({ recipe }) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
    gefilterdeReceptenInstellen(matchedRecipes);
  };

  return (
    <>
      <TextInput onChange={handleChange} w="20%" mb={8} />
    </>
  );
};
