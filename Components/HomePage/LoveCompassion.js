import SubHeading from "../SubHeading";
import { Text, Button } from "@chakra-ui/react";
import components from "../components.module.css";
import Image from "next/image";
import Images from "../../public/Image";
// import Images from "../../public/Image";

const LoveCompassion = () => {
  return (
    <>
      <div>
        <SubHeading pText="SUB-HEADLINE" hText="LOVE AND COMPASSION" />
      </div>
      <p className={components.love__text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        consectetur eveniet ab voluptatibus amet illum natus, voluptate minima
        beatae repellat molestias aperiam quas facilis aspernatur odio
        laudantium! Distinctio, officia amet.
      </p>
      <stack className={components.btn__btn}>
        <Button colorScheme="yellow" size="md" p="7" m="2rem 0">
          LEARN MORE
        </Button>
      </stack>
      <div className={components.img__container}>
        <Image src={Images.love1} alt="love1" width="300px" height="350px" />
      </div>
    </>
  );
};

export default LoveCompassion;
