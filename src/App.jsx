import { Center, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "./components/RecipeChoice";
import { RecipeSearch } from "./components/RecipeSearch";
import { RecipeItemList } from "./components/RecipeItemList";
import { data } from "./utils/data";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();
  const [gefilterdeRecepten, setGefilterdeRecepten] = useState(data.hits);

  const greeting = "Welcome to our recipe checker!";

  const clickFn = (recipe) => {
    setUserRecipe(recipe);
  };

  return (
    <Center minHeight="100vh" bgColor="teal.600" flexDir="column">
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} setRecipe={setUserRecipe} />
      ) : (
        <>
          <Heading size="2xl" mb={8} color="orange.500">
            {greeting}
          </Heading>
          <RecipeSearch gefilterdeReceptenInstellen={setGefilterdeRecepten} />
          <RecipeItemList clickFn={clickFn} Recipes={gefilterdeRecepten} />
        </>
      )}
    </Center>
  );
};
