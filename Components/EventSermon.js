import components from "./components.module.css";
import { FcClock, FcSearch } from "react-icons/fc";
import { Text } from "@chakra-ui/react";

const EventSermon = (props) => {
  return (
    <div className={components.sub__sermon__container}>
      <div className={components.sermon__text}>
        <h4>{props.heading}</h4>
        <h1 className={components.sermon__title}>{props.title}</h1>
        <h1 className={components.sermon__title}>{props.title2}</h1>

        <p margin=".5rem 0">{props.textMessage}</p>
        <div className={components.time}>
          <div className={components.time__sub}>
            <FcClock />
            <div className={components.time__date}>
              <p>{props.days}</p>
              <Text>{props.days2}</Text>
            </div>
          </div>
        </div>
        <div className={components.time}>
          <div className={components.time__sub}>
            <FcSearch />
            <div className={components.time__date}>
              <p>{props.address}</p>
              <Text>{props.address2}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSermon;
