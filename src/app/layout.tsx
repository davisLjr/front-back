"use client";

import Header from "@/components/global/header/header";
import {Providers} from "./providers";
import {Box, Flex} from "@chakra-ui/react";
import NavTabs from "@/components/global/nav/nav";
import {usePathname} from "next/navigation";
import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box>
            <Header />
            <Flex flexDirection="column">
              {pathname.includes("/documents") && (
                <Box>
                  <NavTabs />
                </Box>
              )}

              <Box>{children}</Box>
            </Flex>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
