import { Box, Image, Text } from '@chakra-ui/react';

const CartCart = ({ src, name }) => {
  return (
    <Box h="100px" w="100%" mb="10px" display="flex" alignItems="center">
      <Image h="80%" objectFit="cover" src={src} name={name} pr="10px" />
      <Text fontSize="sm">{name}</Text>
    </Box>
  );
};

export default CartCart;
