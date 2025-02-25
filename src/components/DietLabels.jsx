import { Badge } from "@chakra-ui/react";

export const DietLabels = ({ recipe }) => {
  //console.log(recipe.dietLabels);
  return recipe.dietLabels.map((dietLabels) => {
    return (
      <Badge marginRight="2" colorScheme="purple">
        {dietLabels}
      </Badge>
    );
  });
};
