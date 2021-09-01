import React, { useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import vector1 from '../../assets/images/footer/vector1.png';
import vector2 from '../../assets/images/footer/vector2.png';
import vector3 from '../../assets/images/footer/vector3.png';
import vector4 from '../../assets/images/footer/vector4.png';
import vector5 from '../../assets/images/footer/vector5.png';

import vectors1 from '../../assets/images/footer/payments/vector1.png';
import vectors2 from '../../assets/images/footer/payments/vector2.png';
import vectors3 from '../../assets/images/footer/payments/vector3.png';
import vectors4 from '../../assets/images/footer/payments/vector4.png';
import vectors5 from '../../assets/images/footer/payments/vector5.png';
import vectors6 from '../../assets/images/footer/payments/vector6.png';
import vectors7 from '../../assets/images/footer/payments/vector7.png';
import vectors8 from '../../assets/images/footer/payments/vector8.png';
import vectors9 from '../../assets/images/footer/payments/vector9.png';
import './Footer.scss'
const Footer = ({history}) => {
  return (
    <React.Fragment>
    <div className="footer-desktop">
			<div className="col1">
			<div className="containing">
				<div className="nav">
					<div className="nav-item">
						<div className="title">
							ABOUT US
						</div>
						<div className="text">
							Our history
						</div>
						<div className="text">
							Product Care
						</div>
						<div className="text">
							Store Location
						</div>
						<div className="text">
							Sustainability
						</div>
					</div>
					<div className="nav-item">
						<div className="title">
							POLICY
						</div>
						<div className="text">
						Shipping & Return Policy
						</div>
						<div className="text">
						Privacy Policy
						</div>
						<div className="text">
						Impressum
						</div>
						<div className="text">
						Return Portal
						</div>
					</div>
					<div className="nav-item">
						<div className="title">
						CUSTOMER SERVICE
						</div>
						<div className="text">
						General Terms and Conditions
						</div>
						<div className="text">
						Contact Us
						</div>
						<div className="text">
						News
						</div>
						<div className="text">
						FAQ
						</div>
					</div>
					<div className="nav-item">
						<div className="title">
						CUSTOMER SERVICE
						</div>
						<div className="text">
						General Terms and Conditions
						</div>
						<div className="text">
						Contact Us
						</div>
						<div className="text">
						News
						</div>
						<div className="text">
						FAQ
						</div>
					</div>
				</div>
				<div className="payments">
					<img src={vectors1} alt="" />
					<img src={vectors2} alt="" />
					<img src={vectors3} alt="" />
					<img src={vectors4} alt="" />
					<img src={vectors5} alt="" />
					<img src={vectors6} alt="" />
					<img src={vectors7} alt="" />
					<img src={vectors8} alt="" />
					<img src={vectors9} alt="" />
				</div>
			</div>
			<div className="followUs">
				<div className="title">
					FOLLOW US
					</div>
						<div className="text">
							<a href="">
								<img src={vector1} alt="" />
							</a>
						</div>
						<div className="text">
						<a href="">
								<img src={vector2} alt="" />
							</a>
						</div>
						<div className="text">
						<a href="">
								<img src={vector3} alt="" />
							</a>
						</div>
						<div className="text">
						<a href="">
								<img src={vector4} alt="" />
							</a>
						</div>
						<div className="text">
							<span>
							Global - English 
							</span>
							
							<img src={vector5} alt="" />
						</div>
					</div>
			</div>
			<div className="copyright">
				All content Copyright © 2020 GOBI Cashmere
				</div>
		</div>
		<div className="footer-mobile">
			
		</div>
    </React.Fragment>
  );
};

export default Footer;
