import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { BsDash } from "react-icons/bs";
import components from "../components.module.css";

const Banner = () => {
  return (
    <div className={components.banner__container}>
      <stack style={banner__text}>
        <Text fontSize="sm" color="#fff">
          Welcome to our church
        </Text>
        <Text fontSize="6xl" color="#fff">
          BECOME A PART OF <br />
          OUR COMMUNITY
        </Text>
      </stack>
      <stack>
        <Button colorScheme="yellow" size="md" p="7">
          LEARN MORE
        </Button>
      </stack>
      <div className={components.dash__text} color="#fff">
        <BsDash color="#fff" />
        <Text color="#fff">
          Lorem ipsum dolor si amet consectetur <br /> adipisicing elit. Iusto,
          eos!
        </Text>
      </div>
    </div>
  );
};

export default Banner;
