import styled from "styled-components";
import { Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <div className="banner__container">
      <stack>
        <Text fontSize="sm">Welcome to our church</Text>
        <Text fontSize="6xl">
          BECOME A PART OF <br></br>OUR COMMUNITY
        </Text>
      </stack>
      <stack>
        <Button colorScheme="yellow" size="md">
          Button
        </Button>
      </stack>
    </div>
  );
};

export default Banner;
