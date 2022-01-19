import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react';
import Tilt from 'vanilla-tilt';

const MotionBox = motion(Box)

export function Card() {
  const ticketRef = useRef(null);

  useEffect(() => {
    if (ticketRef.current && !window.matchMedia('(pointer: coarse)').matches) {
      Tilt.init(ticketRef.current, {
        glare: true,
        max: 10,
        'max-glare': 1,
        'reverse': true,
        scale: 1.1,
      });
    }
  }, [ticketRef]);
  return (
    <MotionBox
     animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 2 }}
  >

      <Image
        alt="queen card"
        src="/1.jpg"
        h="520px"
        w="370px"
        objectFit="fill"
        borderRadius="25px"
        ref={ticketRef}
        boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
       
      />
      </MotionBox>
  );
}
