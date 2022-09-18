import Image from "next/image";
import components from "../components.module.css";

const Benefit = (props) => {
  return (
    <div>
      <div className={components.relevant__point}>
        <Image src={props.ben} alt="icon" />
        <h2 className={components.title}>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Benefit;
