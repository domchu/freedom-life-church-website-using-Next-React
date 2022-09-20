import components from "../components.module.css";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

const TheWorld = () => {
  return (
    <>
      <div className={components.world__container}>
        <div className={components.world__text}>
          <h2>WE WANT TO SERVE THE WORLD AROUND US</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
            tenetur.
          </p>
          <Link href="/Sermon" passHref>
            <Button bg="#000" size="md" p="6" m="1.5rem 0" color="#fff">
              <a>REGISTER</a>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TheWorld;
