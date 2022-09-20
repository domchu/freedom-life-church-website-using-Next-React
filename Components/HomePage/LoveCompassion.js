import SubHeading from "../SubHeading";
import { Text, Button } from "@chakra-ui/react";
import components from "../components.module.css";
import Image from "next/image";
import Images from "../../public/Images";
import { Flex } from "@chakra-ui/react";

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
      <Flex justifyContent="space-around" alignItems="center">
        <div className={components.img__container}>
          <div className={components.love__img}>
            <Image
              src={Images.love1}
              alt="love1"
              width="300px"
              height="350px"
            />
          </div>
          <div className="pppp" style={{ marginTop: "40px" }}>
            <div className={components.love__img}>
              <Image
                src={Images.love2}
                className={components.love}
                alt="love1"
                width="350px"
              />
            </div>
          </div>
          <div className={components.love__img}>
            <Image
              src={Images.love3}
              alt="love1"
              width="300px"
              height="350px"
            />
          </div>
        </div>
      </Flex>
      <div>
        <SubHeading pText="OUR MISSION $ VISION" hText="CELEBRATE WITH US" />
        <p className={components.love__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum
          eveniet similique! Sed labore non temporibus, velit veniam possimus
          cumque.
        </p>
      </div>
    </>
  );
};

export default LoveCompassion;
