import Link from "next/link";
import components from "../components.module.css";
import { Text, Flex, Button } from "@chakra-ui/react";
import { FcSearch, FcClock } from "react-icons/fc";
import Image from "next/image";
import Images from "../../public/Images";
import UpComeSermon from "../HomePage/UpComeSermon";

const SermonPage = () => {
  return (
    <>
      <div className={components.sermon__container__page}>
        <div className={components.sermon__text__sermon}>
          <span className={components.contact__text__title}>Sermon</span>
          <Text fontSize="" fontWeight="">
            TAKE PART IN OUR SERMON
          </Text>
        </div>
      </div>
      <UpComeSermon />
    </>
  );
};

export default SermonPage;
