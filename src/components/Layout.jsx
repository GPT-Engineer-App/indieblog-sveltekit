import { Box } from "@chakra-ui/react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <Box maxW="800px" mx="auto" px={4} py={8}>
      <Nav />
      <Box as="main" mt={8}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
