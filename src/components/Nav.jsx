import { Box, Link } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box as="nav" display="flex" justifyContent="space-between" alignItems="center">
      <Link href="/" fontWeight="bold">
        My Blog
      </Link>
      <Box>
        <Link href="/about" mr={4}>
          About
        </Link>
        <Link href="/contact">Contact</Link>
      </Box>
    </Box>
  );
};

export default Nav;
