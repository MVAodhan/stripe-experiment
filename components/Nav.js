import { Box, Heading, IconButton } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { GrCart } from 'react-icons/gr';
import { isCartOpenAtom } from '../utils/atoms';

const Nav = () => {
  const [, setIsCartOpen] = useAtom(isCartOpenAtom);
  return (
    <Box
      h="10vh"
      w="100%"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Heading as="h1" size="2xl">
        Jason Lengstorf figures
      </Heading>
      <IconButton
        aria-label="Open cart"
        icon={<GrCart />}
        onClick={() => setIsCartOpen(true)}
      />
    </Box>
  );
};

export default Nav;
