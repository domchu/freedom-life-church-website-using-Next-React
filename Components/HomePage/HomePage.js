import Banner from "./Banner";
import ChurchRelevant from "./ChurchRelevant";
import RelevantPoint from "./RelevantPoint";
import Images from "../../public/Images";
import LoveCompassion from "./LoveCompassion";
import { Flex } from "@chakra-ui/react";
import ChurchBenefit from "./ChurchBenefit";
// import Benefit from "./Benefit";
import UpComeSermon from "./UpComeSermon";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ChurchRelevant />
      <Flex justifyContent="center">
        <Flex justifyContent="space-around" w={"80%"}>
          <RelevantPoint
            icon={Images.icon1}
            title="ABOUT US"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        harum consectetur doloribus rerum blanditiis qui mollitia recusandae ad
        sequi!"
          />
          <RelevantPoint
            icon={Images.icon2}
            title="GET INVOLVED"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        harum consectetur doloribus rerum blanditiis qui mollitia recusandae ad
        sequi!"
          />
          <RelevantPoint
            icon={Images.icon4}
            title="GIVING BACK"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        harum consectetur doloribus rerum blanditiis qui mollitia recusandae ad
        sequi!"
          />
        </Flex>
      </Flex>
      <LoveCompassion />
      <ChurchBenefit />
      <UpComeSermon />
    </div>
  );
};

export default HomePage;
