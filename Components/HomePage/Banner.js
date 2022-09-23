import { Text, Stack, Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BsDash } from "react-icons/bs";
import components from "../components.module.css";

const Banner = () => {
  return (
    <Box className={components.banner__container}>
      <div className={components.banner__text}>
        <Stack>
          <Text fontSize="sm" color="#fff">
            Welcome to our church
          </Text>
          <Text fontSize="6xl" color="#fff" fontWeight="600">
            BECOME A PART OF <br />
            OUR COMMUNITY
          </Text>
        </Stack>
        <Box>
          <Button background="#ffd2a4" size="md" p="7" m="2rem 0">
            LEARN MORE
          </Button>
        </Box>
        <Box className={components.dash__text} color="#fff">
          <BsDash color="#fff" fontSize="2rem" />
          <Text color="#fff" marginLeft="1rem">
            Lorem ipsum dolor si amet consectetur <br /> adipisicing elit.
            Iusto, eos!
          </Text>
        </Box>
      </div>
    </Box>
  );
};

export default Banner;
