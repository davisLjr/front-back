import React, {ReactNode} from "react";
import {Flex, Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react";

interface StyledTabProps {
  children: ReactNode;
}

const NavTabs: React.FC = () => {
  return (
    <Flex>
      <Tabs
        position="relative"
        variant="unstyled"
        display="flex"
        className="tabs"
        width="100%"
      >
        <TabList
          flexDirection="column"
          className="options-tabs"
          minWidth="260px"
          padding="1.688rem"
          rowGap="0.5rem"
          position="static"
          overflowY="scroll"
          maxH="calc(100vh - 73px)"
        >
          <StyledTab>Opción uno</StyledTab>
          <StyledTab>Opción dos</StyledTab>
          <StyledTab>Opción tres</StyledTab>
          <StyledTab>Opción cuatro</StyledTab>
          <StyledTab>Opción cinco</StyledTab>
          <StyledTab>Opción seis</StyledTab>
          <StyledTab>Opción siete</StyledTab>
          <StyledTab>Opción ocho</StyledTab>
          <StyledTab>Opción nueve</StyledTab>
          <StyledTab>Opción diez</StyledTab>
          <StyledTab>Opción once</StyledTab>
          <StyledTab>Opción doce</StyledTab>
          <StyledTab>Opción trece</StyledTab>
          <StyledTab>Opción catorce</StyledTab>
          <StyledTab>Opción quince</StyledTab>
          <StyledTab>Opción dieciséis</StyledTab>
          <StyledTab>Opción diecisiete</StyledTab>
          <StyledTab>Opción dieciocho</StyledTab>
          <StyledTab>Opción diecinueve</StyledTab>
          <StyledTab>Opción veinte</StyledTab>
          <StyledTab>Opción veintiuno</StyledTab>
          <StyledTab>Opción veintidós</StyledTab>
          <StyledTab>Opción veintitrés</StyledTab>
          <StyledTab>Opción veinticuatro</StyledTab>
          <StyledTab>Opción veinticinco</StyledTab>
          <StyledTab>Opción veintiséis</StyledTab>
        </TabList>

        <TabPanels w="100%" flex="1">
          <TabPanel>
            <p>Opción uno!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción dos!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción tres!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción cuatro!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción cinco!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción seis!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción siete!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción ocho!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción nueve!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción diez!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción once!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción doce!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción trece!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción catorce!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción quince!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción dieciséis!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción diecisiete!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción dieciocho!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción diecinueve!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción veinte!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción veintiuno!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción veintidós!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción veintitrés!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción veinticuatro!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción veinticinco!</p>
          </TabPanel>
          <TabPanel>
            <p>Opción veintiséis!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

const tabStyles = {
  _selected: {borderBottom: "2px solid #0d0c22"},
  background: "none",
  lineHeight: "1.5rem",
  fontSize: "0.875rem",
  color: "#0d0c22",
  justifyContent: "start",
  fontWeight: "600",
  letterSpacing: "2px",
};

const StyledTab: React.FC<StyledTabProps> = ({children}) => {
  return <Tab sx={tabStyles}>{children}</Tab>;
};

export default NavTabs;
