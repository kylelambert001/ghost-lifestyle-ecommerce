import React from "react";
import * as S from "./StyledCartItem.js";

import ImageSpacer from "../ImageSpacer";
import Icon from "../Icon";

const BASE_URL = "http://localhost:1337";

function CartItem({ cartItem, handleRemoveFromCart, closeMenu }) {
  const {
    cartItemId,
    product,
    options: { flavour, qty },
  } = cartItem;

  const handleClick = () => {
    handleRemoveFromCart(cartItemId);
  };

  return (
    <S.Container>
      <S.ImageWrapper>
        {flavour && (
          <ImageSpacer src={BASE_URL + flavour.image.url} alt={product.name} />
        )}
      </S.ImageWrapper>
      <S.ContentWrapper>
        <S.Name to={`/products/${product.slug}`} onClick={() => closeMenu()}>
          {product.name}
        </S.Name>
        <S.Text>{flavour.name}</S.Text>
        <button onClick={handleClick} type="button" className="button">
          Remove
        </button>
      </S.ContentWrapper>
      <S.InfoWrapper>
        <S.Price>${product.price}</S.Price>
        <S.Qty>{qty}</S.Qty>
      </S.InfoWrapper>
    </S.Container>
  );
}

export default CartItem;
