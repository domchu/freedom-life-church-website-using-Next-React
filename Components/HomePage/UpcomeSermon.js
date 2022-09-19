import SubHeading from "../SubHeading";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Images from "../../public/Image";

const UpComeSermon = () => {
  return (
    <>
      <div>
        <SubHeading
          pText="UPCOMING SERMONS"
          hText="JOIN US AND BECOME PART OF SOMETHING GREAT"
        />
      </div>
      <Flex justifyContent="center" margin="3rem 0">
        <div className="sermon__text">
          <h4>Upcoming event</h4>
        </div>
        <div className="sermon__img">
          <Image src={Images.sermonImage} alt="sermon image" />
        </div>
      </Flex>
    </>
  );
};

export default UpComeSermon;
