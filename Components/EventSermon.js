import components from "./components.module.css";
import { FcClock, FcSearch } from "react-icons/fc";

const EventSermon = () => {
  return (
    <div className={components.sub__sermon__container}>
      <div className={components.sermon__text}>
        <h4>Upcoming event</h4>
        <h1 className={components.sermon__title}>
          WATCH AND LISTEN <br /> TO OUR SERMONS
        </h1>

        <p margin="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, a
          sunt. Quisquam.
        </p>
        <div className={components.time}>
          <FcClock />
          <span>
            Friday 23:39 IST <br /> sunday 11:20 ISD
          </span>
        </div>
        <div className={components.time}>
          <FcSearch />
          <span>
            No 233 main st.New York, <br /> United state
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventSermon;
