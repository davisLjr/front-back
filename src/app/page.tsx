// app/page.tsx
"use client";
import {useState} from "react";
import Hero from "@/components/hero/hero";
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

export default function Page() {
  const [isAccordionOpen1, setIsAccordionOpen1] = useState(true);
  const [isAccordionOpen2, setIsAccordionOpen2] = useState(true);
  const [isAccordionOpen3, setIsAccordionOpen3] = useState(true);
  const [isAccordionOpen4, setIsAccordionOpen4] = useState(true);
  const [isAccordionOpen5, setIsAccordionOpen5] = useState(true);
  const [isAccordionOpen6, setIsAccordionOpen6] = useState(true);
  const [isAccordionOpen7, setIsAccordionOpen7] = useState(true);
  const [isAccordionOpen8, setIsAccordionOpen8] = useState(true);

  return (
    <Box p={{base: "0 1.5rem", md: "0 3rem"}}>
      <Hero />

      <Text textAlign="start" fontSize="1.3rem" fontWeight="300" mb="4rem">
        Una solución de backend diseñada para simplificar el trabajo de los
        desarrolladores al acceder a información en proyectos y activos
        digitales relacionados con la Ciudad de Buenos Aires.
      </Text>

      <Flex w="100%" gap="4rem" flexDirection={{base: "column", lg: "row"}}>
        <Box w={{base: "100%", lg: "50%"}}>
          <Heading fontSize="1.51572rem" my="2.5rem">
            TITLE OPTIONAL ONE
          </Heading>

          <Accordion allowMultiple>
            <AccordionItem mb="2rem">
              <h2>
                <AccordionButton
                  sx={buttonAccordion}
                  onClick={() => setIsAccordionOpen1(!isAccordionOpen1)}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight="600">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem mb="2rem">
              <h2>
                <AccordionButton
                  sx={buttonAccordion}
                  onClick={() => setIsAccordionOpen2(!isAccordionOpen2)}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight="600">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Heading fontSize="1.51572rem" my="2.5rem">
            TITLE OPTIONAL TWO
          </Heading>

          <Accordion allowMultiple>
            <AccordionItem mb="2rem">
              <h2>
                <AccordionButton
                  sx={buttonAccordion}
                  onClick={() => setIsAccordionOpen3(!isAccordionOpen3)}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight="600">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem mb="2rem">
              <h2>
                <AccordionButton
                  sx={buttonAccordion}
                  onClick={() => setIsAccordionOpen4(!isAccordionOpen4)}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight="600">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box w={{base: "100%", lg: "50%"}}>
          <Heading fontSize="1.51572rem" my="2.5rem">
            TITLE OPTIONAL THREE
          </Heading>

          <Accordion allowMultiple>
            <AccordionItem mb="2rem">
              <h2>
                <AccordionButton
                  sx={buttonAccordion}
                  onClick={() => setIsAccordionOpen5(!isAccordionOpen5)}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight="600">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem mb="2rem">
              <h2>
                <AccordionButton
                  sx={buttonAccordion}
                  onClick={() => setIsAccordionOpen6(!isAccordionOpen6)}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight="600">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Heading fontSize="1.51572rem" my="2.5rem">
            TITLE OPTIONAL THREE
          </Heading>

          <Accordion allowMultiple>
            <AccordionItem mb="2rem">
              <h2>
                <AccordionButton
                  sx={buttonAccordion}
                  onClick={() => setIsAccordionOpen7(!isAccordionOpen7)}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight="600">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem mb="2rem">
              <h2>
                <AccordionButton
                  sx={buttonAccordion}
                  onClick={() => setIsAccordionOpen8(!isAccordionOpen8)}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight="600">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
      <CustomCursor />
    </Box>
  );
}

const buttonAccordion = {
  backgroundColor: "#0d0c22",
  color: "white",

  _hover: {
    backgroundColor: "#171627",
  },
};
