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
	Form
} from 'reactstrap';
import './index.css'
const Checkout = () => {
	const { items } = useContext(CartStateContext);
	const dispatch = useContext(CartDispatchContext);
  var sum = 0;
  return (
    <React.Fragment>
      <div className="page-content">
        <Container>
					<div className="headLink">
						<Link to="/cart" className="link">Сагс</Link> / 
						<Link to="checkout" className="link selected" >Хүргэлт</Link> / 
						<Link to="checkout/payment" className="link">Төлбөр</Link>
					</div>
					<Row>
						<Col sm="8">
							<h3>Хүргэлтийн хаяг</h3>
							<Form>
							<Row>
								
								<Col sm="6" className="addressInput">
									<input type="text" className="form-control" placeholder="Овог" required/>
								</Col>
								<Col sm="6" className="addressInput">
									<input type="text" className="form-control" placeholder="Нэр" required/>
								</Col>
								<Col sm="6" className="addressInput">
									<input type="email" className="form-control" placeholder="И-Мэйл" required/>
								</Col>
								<Col sm="6" className="addressInput">
									<input type="number" className="form-control" placeholder="Утасны дугаар" required/>
								</Col>
								<Col sm="6" className="addressInput">
									<input type="text" className="form-control" placeholder="Хот/Аймаг" required/>
								</Col>
								<Col sm="6" className="addressInput">
									<input type="text" className="form-control" placeholder="Дүүрэг/Сум"required />
								</Col>
								<Col sm="12" className="addressInput">
									<input type="text" className="form-control" placeholder="Хороо/Баг" required/>
								</Col>
								<Col sm="12" className="addressInput">
									<textarea className="form-control" placeholder="Дэлгэрэнгүй" required/>
								</Col>
								<div className="actions">
								<Link to="/cart" className="link">Өмнөх алхам руу буцах </Link>
                  {console.log(items)}
									<div className="submit-btn">
									<button
                  type="submit"
                  className="checkout-btn"
                  >
										<span className="checkout-btn-text">
											Үргэлжлүүлэх
										</span>
                    
                  </button>
									</div>
                </div>
							</Row>
							</Form>
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

export default Checkout;
