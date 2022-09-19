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
      <Flex>
        <div className="sermon__text">
          <p>Upcoming event</p>
        </div>
        <div className="sermon__img">
          <Image src={Images.sermonImage} alt="" />
        </div>
      </Flex>
    </>
  );
};

export default UpComeSermon;
