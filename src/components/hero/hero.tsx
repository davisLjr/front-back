import React from "react";
import {Box, Heading, Text} from "@chakra-ui/react";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <Box position="relative">
      <Heading
        maxWidth="60rem"
        textAlign="center"
        m="auto"
        paddingTop="10rem"
        paddingBottom="10rem"
        marginBottom="8rem"
        fontSize={{base: "2rem", sm: "3rem", lg: "4rem"}}
      >
        Datos en Tiempo Real: Todo sobre el back de
        <Text background="#0d0c22" color="white">
          Obelisco
        </Text>
      </Heading>
      <svg className="arrow">
        <path className="a1" d="M0 0 L30 22 L60 0"></path>
        <path className="a2" d="M0 20 L30 42 L60 20"></path>
        <path className="a3" d="M0 40 L30 62 L60 40"></path>
      </svg>
    </Box>
  );
};

export default Hero;
