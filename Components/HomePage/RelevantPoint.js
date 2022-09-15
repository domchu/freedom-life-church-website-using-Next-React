// import components from "./components.module.css";
import Images from "../../public/Image";
import Image from "next/image";

const RelevantPoint = (props) => {
  return (
    <div>
      <Image src={props.icon} alt="" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default RelevantPoint;
