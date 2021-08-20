// TO DO
//  baraanii too shirhgiig songoj boldog boloh
// cart-g buren hoosruulsnii daraa 2 product bolon cart huudsiig refresh hiihgui l bol baraa cart-nd nemeh uyd omnoh
// utguud ni orj irj bsniig zasah garaar refresh hiiwel zuger ajillana. code-r refresh hiiwel ajillahgui
import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  CartStateContext,
  CartDispatchContext,
  removeFromCart,
  clearCart
} from "../../contexts/cart";
import {
	Col,
  Container,
  Row,
} from 'reactstrap';
import './index.css'
const Cart = () => {
  const { items } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);
  const history = useHistory();
  const handleRemove = (productId) => {
    console.log(productId);
    return removeFromCart(dispatch, productId);
  };
  const handleProceedCheckout = () => {
    localStorage.getItem('userToken')?.length !== 0?
    history.push("/checkout")
    :alert("Нэвтэрнэ үү");
  };
  var sum = 0;
  return (
    <React.Fragment>
      <div className="page-content">
        <Container>
          <Row>
            <Col sm='9' className="cart-items">
              <div className="cart-header">
                <h2>Сагс 
                  <span>({items.length})</span>
                  <span
                  className="product-clear"
                  onClick={() => {
                  clearCart(dispatch);
                  window.location.reload();
                  }}
                  style={{cursor:'pointer'}}
                  >
                  Сагс хоослох
                  </span>
                  
                </h2>
                
              </div>
              <div className="cart-body">
              {items.map((product,i) => {
                //var too = 2;
                sum += parseInt(product.cartVariant===null? product.cartValue.variants.edges[0].node.priceV2.amount
                :product.cartVariant.price);
          return (
            <div className="cart-item" key={product.cartValue.title}>
              <div className="img">
                <img className="product-image" alt={product.cartValue.title}
                src={product.cartValue.images?.edges[0].node.originalSrc} height="119px"width="82px"/>
              </div>
              <div className="detail">
                <div className="title">
                  <span style={{color:"#282828"}} onClick={() =>
                  history.push(`/product/${product.cartValue.handle}`)
                  } style={{cursor:'pointer'}}
                  >{product.cartValue.title}</span>
                </div>
                <div>
                  <span>{product.cartVariant===null? product.cartValue.variants.edges[0].node.priceV2.amount
                  :product.cartVariant.price}₮</span>
                </div>
                <div className="option">
                  <span className="item">Хэмжээ:</span>
                  <span className="order-amount">{product.cartVariant!==null?product.cartVariant.size:""}</span>
                </div>
                <div className="option">
                  <span className="item">Өнгө:</span>
                  <span className="order-amount">
                    {product.cartVariant!==null?product.cartVariant.color:""}
                  </span>
                </div>
                <div className="option">
                  <span className="item">Материал:</span>
                  <span className="order-amount">{product.cartVariant!==null?product.cartVariant.material:""}</span>
                  </div>
                <div className="option">
                  <span className="item">Тоо ширхэг</span>
                  {/*
                  <select className='order-amount' onChange={(e) => {
                    too = e.target.value;
                  }
                    }>
                    {
                      [...Array(
                        product.cartVariant===null?product.cartValue.variants.edges[0].node.quantityAvailable:
                        product.cartVariant.quantity
                      ).keys()].map ( (number) => {
                        return (
                          <option value={number + 1}  >{number + 1}</option>
                        );
                      })
                    }
                  </select>
                  */}
                  <span className="order-amount">1</span>
                </div>
                <span
                className="product-remove"
                onClick={() => handleRemove(i)}
                >
                Устгах
                </span>
              </div>
              <div className="price">
                
                <span className="amount">{product.cartVariant===null? product.cartValue.variants.edges[0].node.priceV2.amount
                  :product.cartVariant.price}₮</span>
              </div>
            </div>
            );
            })}
              </div>
            </Col>
            <Col sm='3'>
              <div className="cart-header">
                <h2>Захиалгийн мэдээлэл</h2>
                <div className="order-detail">
                  <div className="items">
                    <span className="item">Нийт</span>
                    <span className="item order-amount">{sum * 0.9}</span>
                  </div>
                  <div className="items">
                    <span className="item">Нөат</span>
                    <span className="item order-amount">{sum * 0.1}</span>
                  </div>
                  <div className="items">
                    <span className="item">Хүргэлт</span>
                    <span className="item order-amount">-</span>
                  </div>
                  <div className="items total">
                    <span className="item">Төлөх дүн</span>
                    <span className="item order-amount">{sum}</span>
                  </div>
                </div>
                <div className="checkout">
                  {console.log(items)}
                  <button
                  type="button"
                  className="checkout-btn"
                  onClick={handleProceedCheckout}
                  >
                    Худалдан авах
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Cart;
