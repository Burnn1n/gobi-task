import React, { useContext, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  CartStateContext,
  CartDispatchContext,
} from "../../contexts/cart";
import {
	Col,
  Container,
  Row,
} from 'reactstrap';
import './index.css';
import './payment.css'
const Payment = () => {
	const { items } = useContext(CartStateContext);
	const dispatch = useContext(CartDispatchContext);
  var sum = 0;
  return (
    <React.Fragment>
      <div className="page-content">
        <Container>
					<div className="headLink">
						<Link to="/cart" className="link">Сагс</Link> / 
						<Link to="/checkout" className="link" >Хүргэлт</Link> / 
						<Link to="/checkout/payment" className="link selected">Төлбөр</Link>
					</div>
					<Row>
						<Col sm="8">
							<h3>Төлбөр төлөх</h3>
							<div className="payments">
								<div className="method">
									<div className="icon">
									<svg viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M35.4599 17.9599V17.8538C35.4599 16.7393 35.3537 15.6779 35.0884 14.5635V14.2981C33.3902 6.33766 26.385 0.606139 18.2122 0.5H18C8.34128 0.5 0.540039 8.30124 0.540039 17.9599C0.540039 27.6186 8.34128 35.4198 18 35.4198C19.7513 35.4198 21.4495 35.1545 23.0946 34.6769L23.6784 34.5176L24.7929 34.0931L26.1727 34.6238L30.6836 36.3751C31.4266 36.6935 31.6389 36.3751 31.1612 35.7383L23.9438 25.9734C23.4131 25.2835 22.5109 25.0712 21.7679 25.4427C20.6004 26.0265 19.3267 26.3449 18.053 26.398C13.3829 26.398 9.56188 22.63 9.50881 17.9599C9.45574 13.2898 13.2768 9.46877 17.9469 9.4157C21.9802 9.4157 25.4828 12.2284 26.2788 16.1555V16.4209C26.385 16.8985 26.385 17.3762 26.438 17.8538V18.013C26.438 18.5437 26.385 19.0213 26.2788 19.552L29.1446 20.0827C29.2507 19.3928 29.3569 18.7029 29.3569 18.013V17.9068H32.6472V18.013C32.6472 18.9152 32.5941 19.8174 32.4349 20.7195V20.8257H32.3288L29.3569 20.2419C29.1977 20.9318 28.9854 21.6217 28.72 22.3116L28.667 22.4178L28.5608 22.3647L25.9073 21.2502C25.6951 21.7279 25.4828 22.1524 25.1644 22.577L25.1113 22.6831C24.8459 23.1077 24.4745 23.4792 24.156 23.8506L26.2258 25.8673C26.7034 25.3897 27.181 24.8059 27.5525 24.2221L27.6056 24.116L27.7117 24.1691L30.259 25.8673C30.7367 25.1243 31.1612 24.3283 31.5327 23.4792L31.5858 23.373L31.6919 23.4261L34.2923 24.4875C34.7169 23.4792 35.0353 22.4178 35.2476 21.3564V21.2502C35.3537 20.1358 35.4599 19.0744 35.4599 17.9599Z" fill="#0B2058"></path>
									</svg>
									</div>
									<div>
										<div className="texts" style={{color:"#212121",fontSize:"16px"}}>QPay</div>
										<div className="texts" style={{color:"#4f5255"}}>qr code bolon app</div>
									</div>
								</div>
								<div className="method">
									<div className="icon">
									<svg viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H36V36.5H0V0.5ZM32.4643 11.75C32.9463 13.0358 33.7498 14.8036 33.7498 16.25H29.0892H19.6071L14.625 25.5715H9.48212L16.875 11.75H26.9999C25.0714 8.85716 21.6964 7.25002 18 7.25002C11.7321 7.25002 6.75 12.2322 6.75 18.5C6.75 24.7679 11.8928 29.7501 18 29.7501C21.5357 29.7501 24.9107 27.9822 26.9999 25.4108H19.6071L22.1785 20.9108H33.7498C33.5891 22.5179 33.1071 24.1251 32.3035 25.4108C30.0535 30.0715 25.5535 33.4465 20.25 34.25C11.5714 35.5359 3.53572 29.4287 2.25 20.9108C1.125 12.0715 7.07142 4.03573 15.75 2.75C22.8214 1.78572 29.5714 5.64287 32.4643 11.75Z" fill="#0F62AC"></path>
									</svg>
									</div>
									<div>
										<div className="texts" style={{color:"#212121",fontSize:"16px"}}>Голомт банк</div>
										<div className="texts" style={{color:"#4f5255"}}>Картаар</div>
									</div>
								</div>
								<div className="method">
									<img src="https://image.flaticon.com/icons/png/128/179/179453.png" className="icon"/>
									<div>
										<div className="texts" style={{color:"#212121",fontSize:"16px"}}>Paypal</div>
										<div className="texts" style={{color:"#4f5255"}}>Кредит картаар</div>
									</div>
								</div>
							</div>
							<div className="actions">
								<Link to="/checkout" className="link">Өмнөх алхам руу буцах </Link>
                  {console.log(items)}
									<div className="submit-btn">
									<button
                  type="submit"
                  className="checkout-btn"
                  >
										<span className="checkout-btn-text">
											Захиалга дуусгах
										</span>
                    
                  </button>
									</div>
                </div>
						</Col>
						<Col sm="4">
							<h3>Захиалгын мэдээлэл ({items.length})</h3>
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
                  <span style={{color:"#282828"}}>
										{product.cartValue.title}
									</span>
                </div>
                <div className="option">
                  <span className="details">{product.cartVariant!==null?product.cartVariant.size:""}</span>
									<span className="details">
                    {product.cartVariant!==null&&product.cartVariant.color!==undefined?" /"+product.cartVariant.color:""}
                  </span>
									<span className="details">{product.cartVariant!==null&&
									product.cartVariant.material!==undefined?"/" +product.cartVariant.material:""}</span>
                </div>
              </div>
							
            </div>
            );
            })}
						<div className="order-detail">
                  <div className="items">
                    <span className="item">Нийт</span>
                    <span className="item order-amount">{sum} ₮</span>
                  </div>
                  <div className="items">
                    <span className="item">Хүргэлт</span>
                    <span className="item order-amount">-</span>
                  </div>
                  <div className="items total">
                    <span className="item">Төлөх дүн</span>
                    <span className="item order-amount">{sum} ₮</span>
                  </div>
                </div>
						</Col>
					</Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Payment;
