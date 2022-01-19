import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import DOTS from "vanta/dist/vanta.dots.min";
import * as THREE from "three";
import { Box, Flex } from "@chakra-ui/react";
import { Card } from "../component/Card";
import { Hitbutton } from "../component/Hitbutton";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,
          backgroundColor: 0x0d2222,
          points: 4.0,
          maxDistance: 14.0,
          spacing: 20.0,
          showDots: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    <>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <Flex
        w="100vw"
        h="100vh"
        ref={vantaRef}
        alignItems="center"
        justifyContent="center"
      >
        <Hitbutton />
        <Card />
      </Flex>
    </>
  );
}
