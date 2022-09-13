import styled from "styled-components";
import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { BsDash } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="banner__container">
      <stack>
        <Text fontSize="sm">Welcome to our church</Text>
        <Text fontSize="6xl">
          BECOME A PART OF <br />
          OUR COMMUNITY
        </Text>
      </stack>
      <stack>
        <Button colorScheme="yellow" size="md" p="7">
          LEARN MORE
        </Button>
      </stack>
      <div className="dash-text">
        <BsDash />
        <p>
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iusto,
          eos!
        </p>
      </div>
    </div>
  );
};

export default Banner;
