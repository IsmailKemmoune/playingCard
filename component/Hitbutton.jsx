import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const animation = { opacity: [0, 1], transition: { duration: 2 } };

export function Hitbutton() {
  return (
    <MotionButton
      animate={animation}
      whileHover={{ scale: 1.1 }}
      h="60px"
      w="200px"
      borderRadius="25px"
      fontSize="2xl"
      borderWidth="2px"
      borderColor="#36454f"
      _hover={{
        scale: "2xl",
        borderColor: "#16161d",
        borderWidth: "3px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      Hit
    </MotionButton>
  );
}
