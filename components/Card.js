import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { cartAtom } from '../utils/atoms';

const Card = ({ src, name, product }) => {
  const [, setCart] = useAtom(cartAtom);
  return (
    <Box w="100%" display="flex" flexDir="column" alignItems="center">
      <Image boxSize="100%" objectFit="cover" src={src} alt={name} />
      <Text fontSize="md">{name}</Text>
      <Button
        colorScheme="teal"
        size="sm"
        onClick={() => setCart((prev) => [...prev, product])}
      >
        Add to cart
      </Button>
    </Box>
  );
};

export default Card;
