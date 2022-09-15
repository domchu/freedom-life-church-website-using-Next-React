import Banner from "./Banner";
import ChurchRelevant from "./ChurchRelevant";
import RelevantPoint from "./RelevantPoint";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ChurchRelevant />
      <RelevantPoint
        title="ABOUT US"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        harum consectetur doloribus rerum blanditiis qui mollitia recusandae ad
        sequi!"
      />
      <RelevantPoint
        title="GET INVOLVED"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        harum consectetur doloribus rerum blanditiis qui mollitia recusandae ad
        sequi!"
      />
      <RelevantPoint
        title="GIVING BACK"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        harum consectetur doloribus rerum blanditiis qui mollitia recusandae ad
        sequi!"
      />
    </div>
  );
};

export default HomePage;
