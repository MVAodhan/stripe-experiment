import { Grid, GridItem } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { productsAtom } from '../utils/atoms';
import Card from './Card';

const ProductGrid = () => {
  const [products] = useAtom(productsAtom);

  return (
    <Grid
      pt="50px"
      pb="50px"
      w="80%"
      templateColumns="repeat(4, 1fr)"
      gap={6}
      pl="10px"
      pr="10px"
    >
      {products &&
        products.map((product) => {
          return (
            <GridItem key={product.id}>
              <Card
                src={product.product.images[0]}
                name={product.product.name}
                product={product}
              />
            </GridItem>
          );
        })}
    </Grid>
  );
};

export default ProductGrid;
