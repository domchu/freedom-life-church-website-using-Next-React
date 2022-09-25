import components from "../components.module.css";
import { Text, Flex } from "@chakra-ui/react";
import UpComeSermon from "../HomePage/UpComeSermon";

import EventSermon from "../EventSermon";

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

      <Flex justify="center" margin="4rem 0">
        <EventSermon
          heading="Upcoming event"
          title="100 RANDOMS ACTS"
          title2="OF KINDNESS"
          textMessage="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident."
          days=" Friday 23:39 IST "
          days2=" sunday 11:20 ISD"
          address="No 233 main Street,"
          address2="New York United state"
        />
        <EventSermon
          heading="Upcoming event"
          title="100 RANDOMS ACTS"
          title2="OF KINDNESS"
          textMessage="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident"
          days=" Friday 23:39 IST "
          days2=" sunday 11:20 ISD"
          address="No 233 main Street,"
          address2="New York United state"
        />
        <EventSermon
          heading="Upcoming event"
          title="100 RANDOMS ACTS"
          title2="OF KINDNESS"
          textMessage="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident."
          days=" Friday 23:39 IST "
          days2=" sunday 11:20 ISD"
          address="No 233 main Street,"
          address2="New York United state"
        />
        <EventSermon
          heading="Upcoming event"
          title="100 RANDOMS ACTS"
          title2="OF KINDNESS"
          textMessage="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident."
          days=" Friday 23:39 IST "
          days2=" sunday 11:20 ISD"
          address="No 233 main Street,"
          address2="New York United state"
        />
      </Flex>
    </>
  );
};

export default SermonPage;
