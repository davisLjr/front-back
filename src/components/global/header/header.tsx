"use client";
import React from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import "./header.css";

const Header: React.FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  const btnOne = "Docs";
  const btnTwo = "About";
  const btnThree = "GCBA";

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p={4}
      color="white"
      borderBottom="1px solid #0d0c22"
    >
      <Link href="/">
        <Heading
          as="h1"
          size="md"
          color="#0d0c22"
          fontWeight="900"
          letterSpacing="2px"
          fontFamily="fantasy"
        >
          O-BACK
        </Heading>
      </Link>

      <Flex gap="1rem" display={{base: "none", md: "flex"}}>
        <Link href="/documents" className="button">
          {btnOne}
          <span></span>
        </Link>
        <Link href="/about" className="button">
          {btnTwo}
          <span></span>
        </Link>
        <Link href="https://gcba.github.io/" className="button-dark">
          {btnThree}
        </Link>
      </Flex>
      <Box display={{sm: "block", md: "none"}}>
        <Button ref={btnRef} sx={btnChakra} onClick={onOpen}>
          Open
        </Button>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef as React.RefObject<HTMLButtonElement>}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody display="flex" flexDirection="column" rowGap="1rem">
              <Link href="/documents" className="button-drawer">
                {btnOne}
              </Link>
              <Link href="/about" className="button-drawer">
                {btnTwo}
              </Link>
              <Link href="https://gcba.github.io/" className="button-drawer">
                {btnThree}
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Header;

const btnChakra = {
  backgroundColor: "#0d0c22",
  color: "white",
  padding: "0.5rem 1rem",
  alignItems: "center",
  display: "flex",
  transition: "0.2s ease-in-out",
  borderRadius: "0",

  "&:hover": {
    backgroundColor: "white",
    color: "#0d0c22",
  },
};
