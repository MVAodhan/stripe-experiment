import { Box, Image } from '@chakra-ui/react';

const Card = ({ src, name }) => {
  return (
    <Box w="100%" display="flex" flexDir="column" alignItems="center">
      <Image boxSize="100%" objectFit="cover" src={src} alt={name} />
      <h2>{name}</h2>
    </Box>
  );
};

export default Card;
