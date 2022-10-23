import { Box, Image, Text } from '@chakra-ui/react';

const Card = ({ src, name }) => {
  return (
    <Box w="100%" display="flex" flexDir="column" alignItems="center">
      <Image boxSize="100%" objectFit="cover" src={src} alt={name} />
      <Text fontSize="md">{name}</Text>
    </Box>
  );
};

export default Card;
