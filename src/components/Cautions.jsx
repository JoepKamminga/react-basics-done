import { Badge } from "@chakra-ui/react";

export const Cautions = ({ recipe }) => {
  return recipe.cautions.map((cautions) => {
    return (
      <Badge marginRight="2" colorScheme="red">
        {cautions}
      </Badge>
    );
  });
};
