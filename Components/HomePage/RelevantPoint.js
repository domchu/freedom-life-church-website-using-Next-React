// import components from "./components.module.css";
import Images from "../../public/Image";
import Image from "next/image";

const RelevantPoint = (props) => {
  return (
    <div>
      <Image src={Images.icon1} alt="" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default RelevantPoint;
