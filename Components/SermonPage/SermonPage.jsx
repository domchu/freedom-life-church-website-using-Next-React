import components from "../components.module.css";
import { Text } from "@chakra-ui/react";

const SermonPage = () => {
  return (
    <div className={components.sermon__container}>
      <div className={components.sermon__text}>
        <span className={components.contact__text__title}>contact</span>
        <Text fontSize="" fontWeight="">
          GET IN TOUCH WITH <br /> OUR CHURCH
        </Text>
      </div>
    </div>
  );
};

export default SermonPage;
