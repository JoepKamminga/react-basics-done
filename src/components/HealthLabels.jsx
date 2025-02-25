import { Badge } from "@chakra-ui/react";

export const HealthLabels = ({ recipe }) => {
  //console.log(recipe.dietLabels);
  return recipe.healthLabels.map((healthLabels) => {
    return (
      <Badge marginRight="2" colorScheme="purple">
        {healthLabels}
      </Badge>
    );
  });
};
