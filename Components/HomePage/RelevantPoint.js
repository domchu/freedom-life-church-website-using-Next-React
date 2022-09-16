// import components from "./components.module.css";
import Images from "../../public/Image";
import Image from "next/image";
import components from "../components.module.css";

const RelevantPoint = (props) => {
  return (
    <div className={components.relevant__container}>
      <div className={components.relevant__point}>
        <Image src={props.icon} alt="" />
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default RelevantPoint;
