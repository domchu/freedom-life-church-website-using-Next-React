import Link from "next/Link";
import SubHeading from "../SubHeading";
import { Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import Images from "../../public/Images";
import { FcSearch } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import components from "../components.module.css";

const UpComeSermon = () => {
  return (
    <>
      <div>
        <SubHeading
          pText="UPCOMING SERMONS"
          hText="JOIN US AND BECOME PART OF SOMETHING GREAT"
        />
      </div>
      <Flex justifyContent="center" margin="3rem 0" width="100%">
        <div className={components.sermon__container}>
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
                No 233 main st. New York, <br /> United state
              </span>
            </div>
            <Link href="/sermon" passHref>
              <Button bg="#000" size="md" p="6" m="1.5rem 0" color="#fff">
                <a>REGISTER</a>
              </Button>
            </Link>
          </div>
        </div>
        <div className="sermon__img">
          <Image src={Images.sermonImage} alt="sermon image" />
        </div>
      </Flex>
    </>
  );
};

export default UpComeSermon;
