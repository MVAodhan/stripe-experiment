import { Button, Grid, GridItem } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { productsAtom, storeAtom } from '../utils/atoms';
import Card from './Card';

const ProductGrid = () => {
  const [products] = useAtom(productsAtom);
  const [, setStore] = useAtom(storeAtom);

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
              />
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => setStore((prev) => [...prev, product])}
              >
                Add to cart
              </Button>
            </GridItem>
          );
        })}
    </Grid>
  );
};

export default ProductGrid;
