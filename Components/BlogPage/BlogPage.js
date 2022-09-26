import components from "../components.module.css";
import { Box, Text } from "@chakra-ui/react";
// import SubHeading from "../SubHeading";

const BlogPage = () => {
  return (
    <>
      <Box className={components.blog__container}>
        <Box className={components.blog__text}>
          <span className={components.blog__text__text}>OUR BLOG</span>
          <Text fontSize="2.5rem" fontWeight="bold">
            MOST RECENT POST
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default BlogPage;
