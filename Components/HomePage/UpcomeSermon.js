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
      <Flex justifyContent="center" margin="3rem 0" width="100%">
        <div className="sermon__text">
          <h4>Upcoming event</h4>
          <h1>
            WATCH AND LISTEN <br /> TO OUR SERMONS
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            a sunt. Quisquam.
          </p>
        </div>
        <div className="sermon__img">
          <Image src={Images.sermonImage} alt="sermon image" />
        </div>
      </Flex>
    </>
  );
};

export default UpComeSermon;
