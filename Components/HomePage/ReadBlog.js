import components from "../components.module.css";
import { Text } from "@chakra-ui/react";
import SubHeading from "../SubHeading";

const ReadBlog = () => {
  return (
    <>
      <div>
        <SubHeading pText="READ OUR BLOG" hText="SHARE, INSPIRE AND INNOVATE" />
      </div>

      <div className={components.read__container}>
        <div className={components.read__text}>
          <Text className={components.world__title}>
            WE WANT TO <br />
            SERVE THE WORLD
            <br /> AROUND US
          </Text>
          <p>
            Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
            Eaque, tenetur.
          </p>
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
