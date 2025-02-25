export const Ingredients = ({ recipe }) => {
  return recipe.ingredientLines.map((ingredientLines) => {
    return <li>{ingredientLines}</li>;
  });
};
