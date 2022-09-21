import components from "../components.module.css";
import { Text } from "@chakra-ui/react";

const BlogPost = (props) => {
  return (
    <>
      <div className={components.read__blog__container}>
        <div className={components.blog__text}>
          <h4>{props.h4Text}</h4>
          <h1 className={components.blog__title}>
            WATCH AND LISTEN <br /> TO OUR SERMONS
          </h1>
          <p>{props.pText}</p>

          <Text margin="2rem 0" fontWeight="bold">
            {props.textTitle}
          </Text>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
