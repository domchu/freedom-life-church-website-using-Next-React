import Banner from "./Banner";
import ChurchRelevant from "./ChurchRelevant";
import RelevantPoint from "./RelevantPoint";
// import Image from "next/image";
import Images from "../../public/Image";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ChurchRelevant />
      <RelevantPoint
        icon={Images.icon1}
        title="ABOUT US"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        harum consectetur doloribus rerum blanditiis qui mollitia recusandae ad
        sequi!"
      />
      <RelevantPoint
        icon={Images.icon1}
        title="GET INVOLVED"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        harum consectetur doloribus rerum blanditiis qui mollitia recusandae ad
        sequi!"
      />
      <RelevantPoint
        icon={Images.icon1}
        title="GIVING BACK"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        harum consectetur doloribus rerum blanditiis qui mollitia recusandae ad
        sequi!"
      />
    </div>
  );
};

export default HomePage;
