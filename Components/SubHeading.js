import React from "react";
import { Text } from "@chakra-ui/react";

const SubHeading = (props) => {
  return (
    <div>
      <Text fontSize="5x1">{props.pText}</Text>
      <Text fontSize="6x1">{props.hText}</Text>
    </div>
  );
};

export default SubHeading;
