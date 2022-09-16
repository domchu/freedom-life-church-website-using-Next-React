import SubHeading from "../SubHeading";
import { Text } from "@chakra-ui/react";
import components from "../components.module.css";

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
    </>
  );
};

export default LoveCompassion;
