import Image from "next/image";
import components from "../components.module.css";

const RelevantPoint = (props) => {
  return (
    <div className={components.relevant__container}>
      <div className={components.relevant__point}>
        <Image src={props.icon} alt="icon" />
        <h2 className={components.title}>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div className={components.empty__div__div}>{props.div}</div>
    </div>
  );
};

export default RelevantPoint;
