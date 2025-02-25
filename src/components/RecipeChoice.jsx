import {
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Button } from "./ui/Button";
import { HealthLabels } from "./HealthLabels";
import { DietLabels } from "./DietLabels";
import { Cautions } from "./Cautions";
import { Ingredients } from "./Ingredients";
import { TotalNutrients } from "./TotalNutrients";

export const RecipeChoice = ({ recipe, setRecipe }) => {
  console.log(recipe);
  const totalTime = recipe.totalTime;
  const servings = recipe.yield;
  const mealType = recipe.mealType;

  return (
    <Center
      minWidth="60vw"
      maxWidth="80%"
      minHeight="100vh"
      bgColor={"gray.50"}
      flexDir={"column"}
      justifyContent="start"
      gap={1}
    >
      <Image
        margin={1}
        src={recipe.image}
        fit="cover"
        w="99%"
        h="200px"
        alt={recipe.label}
      />
      <Grid templateColumns={{ sm: "column", md: "repeat(2, 1fr)" }} gap={4}>
        <GridItem padding="5" colSpan={1}>
          <Text color="lightGrey" fontWeight={"bolder"}>
            {mealType}
          </Text>
          <Heading size={"xl"} fontWeight={"bold"}>
            {recipe.label}
          </Heading>
          <Text>total cooking time: {totalTime}</Text>
          <Text>servings: {servings}</Text>
          <Heading borderColor={"black"} size={"md"} fontWeight={"bold"}>
            Ingredients:
          </Heading>
          <Ingredients recipe={recipe} />
        </GridItem>

        <GridItem colSpan={{ sm: "column", md: 1 }}>
          <Text>Health labels:</Text>
          <HealthLabels recipe={recipe} />

          <Text marginTop={4}>Diet labels:</Text>
          <DietLabels recipe={recipe} />

          <Text marginTop={4}>Caution labels:</Text>
          <Cautions recipe={recipe} />

          <Text>Total nutrients:</Text>
          <TotalNutrients recipe={recipe.totalNutrients} />
        </GridItem>
      </Grid>

      <Flex mt={4}>
        <Button onClick={() => setRecipe(null)}>Return</Button>
      </Flex>
    </Center>
  );
};
