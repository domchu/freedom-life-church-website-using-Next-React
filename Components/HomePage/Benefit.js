import Image from "next/image";
import components from "../components.module.css";
import { Flex } from "@chakra-ui/react";

const Benefit = (props) => {
  return (
    <div>
      <Flex className={components.relevant__ben}>
        <Image src={props.ben} alt="benefits" />
        <h2 className={components.title}>{props.title}</h2>
        <p>{props.text}</p>
      </Flex>
    </div>
  );
};

export default Benefit;
