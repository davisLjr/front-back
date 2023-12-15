// app/page.tsx
"use client";
import {Box} from "@chakra-ui/react";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

export default function DocumentsPage() {
  return (
    <Box p={{base: "0 1.5rem", md: "0 3rem"}}>
      <CustomCursor />
    </Box>
  );
}
