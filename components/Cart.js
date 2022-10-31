import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { isCartOpenAtom } from '../utils/atoms';
import { cartAtom } from '../utils/atoms';
import { checkout } from '../utils/checkout';

import CartCard from './CartCard';

const Cart = () => {
  const [cart] = useAtom(cartAtom);
  const handleCheckout = () => {
    checkout(cart);
  };
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom);
  console.log('cart from cart component', cart);
  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={() => setIsCartOpen((prev) => !prev)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            {cart &&
              cart.map((item) => (
                <CartCard
                  key={item.id}
                  src={item.product.images[0]}
                  name={item.product.name}
                />
              ))}
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="teal" onClick={handleCheckout}>
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
