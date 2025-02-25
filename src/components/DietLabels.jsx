import { Badge } from "@chakra-ui/react";

export const DietLabels = ({ recipe }) => {

  return recipe.dietLabels.map((dietLabels) => {
    return (
      <Badge marginRight="2" colorScheme="purple">
        {dietLabels}
      </Badge>
    );
  });
};
