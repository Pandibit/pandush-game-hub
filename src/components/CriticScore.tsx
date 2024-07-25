import { Badge } from "@chakra-ui/react";
import React from "react";

const CriticScore = ({ score }: { score: number }) => {
  let color =
    score > 75 ? "green" :
    score > 60 ? "yellow" :
    score < 60 ? "red" : "";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
