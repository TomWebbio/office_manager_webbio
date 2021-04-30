import React, { useContext } from 'react';
import { Container, Row } from 'reactstrap';
import ShopItemComponent from 'apps/office-manager-client/components/shop-item';
import CartContext from 'apps/office-manager-client/context/cart';
import IItem from 'apps/office-manager-client/interfaces/item';

export interface IShopPageProps {}

const itemsFromFakeBackend: IItem[] = [
  {
    name: 'Cool Shoe',
    pic: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg',
    price: 9.99,
  },
  {
    name: 'New Slippers',
    pic:
      'https://image.shutterstock.com/shutterstock/photos/1841561251/display_1500/stock-photo-many-different-soft-slippers-on-white-marble-background-flat-lay-1841561251.jpg',
    price: 9.99,
  },
];

const ShopPage: React.FunctionComponent<IShopPageProps> = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <>
      <Container className="p-1">
        <Row>Hallo 2</Row>
      </Container>
      <Container className="p-1">
        <Row>
          {itemsFromFakeBackend.map((item, index) => (
            <ShopItemComponent key={index} item={item} />
          ))}
        </Row>

        <Row>
          <div>card items</div>
          {cartContext.cartState.items.map((item, index) => {
            return <div key={index}>{item.name}</div>;
          })}
        </Row>
      </Container>
    </>
  );
};

export default ShopPage;
