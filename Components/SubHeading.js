import { Text } from "@chakra-ui/react";
import components from "./components.module.css";

const SubHeading = (props) => {
  return (
    <div className={components.sub__heading}>
      <Text fontSize="10px" align="center" fontWeight="600">
        {props.pText}
      </Text>
      <Text fontSize="2.5rem" align="center" fontWeight="700">
        {props.hText}
      </Text>
    </div>
  );
};

export default SubHeading;
