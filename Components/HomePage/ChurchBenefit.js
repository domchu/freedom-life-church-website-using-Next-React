import Images from "../../public/Image";
import SubHeading from "../SubHeading";
import Benefit from "./Benefit";
import { Flex } from "@chakra-ui/react";

const ChurchBenefit = () => {
  return (
    <div>
      <div>
        <SubHeading
          pText="WATCH AND LISTEN"
          hText={`THE BENEFITS OF JOINING OUR CHURCH`}
        />
      </div>
      <Flex justifyContent="center" margin="2rem">
        <Benefit ben={Images.benefit1} />
        <Benefit ben={Images.benefit2} />
        <Benefit ben={Images.benefit3} />
        <Benefit ben={Images.benefit4} />
      </Flex>
    </div>
  );
};

export default ChurchBenefit;
