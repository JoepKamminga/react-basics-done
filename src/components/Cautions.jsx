import { Badge } from "@chakra-ui/react";

export const Cautions = ({ recipe }) => {
  //console.log(recipe.cautions);
  return recipe.cautions.map((cautions) => {
    return (
      <Badge marginRight="2" colorScheme="red">
        {cautions}
      </Badge>
    );
  });
};
