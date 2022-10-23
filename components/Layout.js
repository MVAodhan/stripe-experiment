import { Box } from '@chakra-ui/react';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Box w="80%" h="100%" display="flex" flexDir="column" alignItems="center">
      <Nav />
      {children}
    </Box>
  );
};

export default Layout;
