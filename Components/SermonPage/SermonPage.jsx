import components from "../components.module.css";
import { Text, Flex } from "@chakra-ui/react";
import UpComeSermon from "../HomePage/UpComeSermon";
import { FcClock, FcSearch } from "react-icons/fc";

const SermonPage = () => {
  return (
    <>
      <div className={components.sermon__container__page}>
        <div className={components.sermon__text__sermon}>
          <span className={components.sermon__text__title}>Sermon</span>
          <Text fontSize="2.5rem" fontWeight="bold">
            TAKE PART IN OUR SERMON
          </Text>
        </div>
      </div>
      <UpComeSermon />
      <div className={components.all__events}>
        <Text>VIEW ALL EVENTS</Text>
      </div>

      <Flex>
        <div className={components.sub__sermon__container}>
          <div className={components.sermon__text}>
            <h4>Upcoming event</h4>
            <h1 className={components.sermon__title}>
              WATCH AND LISTEN <br /> TO OUR SERMONS
            </h1>

            <p margin="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident, a sunt. Quisquam.
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
      </Flex>
    </>
  );
};

export default SermonPage;
