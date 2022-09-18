import components from "../components.module.css";
import Image from "next/image";
import Images from "../../public/Image";
import SubHeading from "../SubHeading";
import Benefit from "./Benefit";

const ChurchBenefit = () => {
  return (
    <div>
      <div>
        <SubHeading
          pText="WATCH AND LISTEN"
          hText="THE BENEFITS OF  JOINING OUR CHURCH"
        />
      </div>
      <Benefit />
    </div>
  );
};

export default ChurchBenefit;
