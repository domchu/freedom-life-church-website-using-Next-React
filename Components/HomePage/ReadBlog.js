import components from "../components.module.css";
import { Text } from "@chakra-ui/react";
import SubHeading from "../SubHeading";

const ReadBlog = () => {
  return (
    <>
      <div>
        <SubHeading pText="READ OUR BLOG" hText="SHARE, INSPIRE AND INNOVATE" />
      </div>

      <div className={components.read__blog__container}>
        <div className={components.blog__text}>
          <h4>Upcoming event</h4>
          <h1 className={components.blog__title}>
            WATCH AND LISTEN <br /> TO OUR SERMONS
          </h1>

          <p margin="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            a sunt. Quisquam.
          </p>

          <Text>
            By Mathew Johnson <br /> Tuesday 13 May, 2021
          </Text>
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
