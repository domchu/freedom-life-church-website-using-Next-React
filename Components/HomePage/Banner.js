import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BsDash } from "react-icons/bs";
import components from "../components.module.css";

const Banner = () => {
  return (
    <div className={components.banner__container}>
      <div className={components.banner__text}>
        <stack>
          <Text fontSize="sm" color="#fff">
            Welcome to our church
          </Text>
          <Text fontSize="6xl" color="#fff" fontWeight="600">
            BECOME A PART OF <br />
            OUR COMMUNITY
          </Text>
        </stack>
        <stack>
          <Button colorScheme="yellow" size="md" p="7" m="2rem 0">
            LEARN MORE
          </Button>
        </stack>
        <div className={components.dash__text} color="#fff">
          <BsDash color="#fff" fontSize="2rem" />
          <Text color="#fff" marginLeft="1rem">
            Lorem ipsum dolor si amet consectetur <br /> adipisicing elit.
            Iusto, eos!
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Banner;
