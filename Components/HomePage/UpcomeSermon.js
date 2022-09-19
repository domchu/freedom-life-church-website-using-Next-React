import SubHeading from "../SubHeading";
import { Flex } from "@chakra-ui/react";

const UpComeSermon = () => {
  return (
    <>
      <div>
        <SubHeading
          pText="UPCOMING SERMONS"
          hText="JOIN US AND BECOME PART OF SOMETHING GREAT"
        />
      </div>
      <Flex>
        <div className="sermon__text">
          <p>Upcoming event</p>
        </div>
        <div className="sermon__img"></div>
      </Flex>
    </>
  );
};

export default UpComeSermon;
