import { Text } from "@chakra-ui/react";
import components from "./components.module.css";

const BlogPost = (props) => {
  return (
    <>
      <div className={components.read__blog__container}>
        <div className={components.blog__text} style={{ margin: "10px" }}>
          <h4>{props.h4Text}</h4>
          <h1 className={components.blog__title}>
            WATCH AND LISTEN TO OUR SERMONS
          </h1>
          <p>{props.pText}</p>

          <Text marginTop="2rem" fontWeight="bold">
            {props.textTitle}
          </Text>
          <span margin="0.25rem" fontWeight="900">
            {props.textName}
          </span>
        </div>
        <div className={components.empty__div}>{props.div}</div>
      </div>
    </>
  );
};

export default BlogPost;
