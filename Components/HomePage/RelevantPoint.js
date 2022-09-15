// import components from "./components.module.css";
import Images from "../../public/Image";
import Image from "next/image";

const RelevantPoint = (props) => {
  return (
    <div>
      <Image src={Images.icon1} alt="" />
      <h2>{props.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        harum consectetur doloribus rerum blanditiis qui mollitia recusandae ad
        sequi!
      </p>
    </div>
  );
};

export default RelevantPoint;
