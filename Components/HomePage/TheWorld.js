import components from "../components.module.css";
import Link from "next/link";
import { Button, Text } from "@chakra-ui/react";

const TheWorld = () => {
  return (
    <>
      <div className={components.world__container}>
        <div className={components.world__text}>
          <Text>
            WE WANT TO <br />
            SERVE THE WORLD
            <br /> AROUND US
          </Text>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
            tenetur.
          </p>
          <Link href="/Sermon" passHref>
            <Button
              colorScheme="yellow"
              size="md"
              p="6"
              m="1.5rem 0"
              color="#fff"
            >
              <a>VISIT</a>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TheWorld;
