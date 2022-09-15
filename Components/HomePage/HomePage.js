import Banner from "./Banner";
import ChurchRelevant from "./ChurchRelevant";
import RelevantPoint from "./RelevantPoint";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ChurchRelevant />
      <RelevantPoint title="ABOUT US" />
      <RelevantPoint title="GET INVOLVED" />
      <RelevantPoint title="GIVING BACK" />
    </div>
  );
};

export default HomePage;
