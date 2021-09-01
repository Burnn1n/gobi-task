import React, { useEffect, useState } from "react";
import {
	Col,
  Container,
  Row,
} from 'reactstrap';
import img1 from '../../assets/images/page/img1.png'
import img2 from '../../assets/images/page/img2.png'
import img3 from '../../assets/images/page/img3.png'
import img4 from '../../assets/images/page/img4.png'
import img5 from '../../assets/images/page/img5.png'
import img6 from '../../assets/images/page/img6.png'
import img7 from '../../assets/images/page/img7.png'
import arrow from '../../assets/images/page/arrow.png'
import img8 from '../../assets/images/page/img8.png'
import img9 from '../../assets/images/page/img9.png'
import img10 from '../../assets/images/page/img10.png'
import img11 from '../../assets/images/page/img11.png'
import img12 from '../../assets/images/page/img12.png'
import img13 from '../../assets/images/page/img13.png'
import img14 from '../../assets/images/page/img14.png'
import img15 from '../../assets/images/page/img15.png'
import arrow_phone from '../../assets/images/page/arrow-phone.png'

import './index.scss'
function Home({history}) {
  return (
	<React.Fragment>
		<div className='page-content'>
			<div className="section_1_desktop mx-0">
				<Row>
					<Col sm="5" id="col1">
						<div className="title">
							WINTER SPICE 2020
						</div>
						
						<div className="text">
							Infusion of summer pieces and cashmere silk blends.
						</div>
						<div className="shopNow">
                <button>
                  <span>
                  Shop now
                  </span>
                  </button>
                </div>
					</Col>
					<Col sm="7" id="col2">
						<div>
						<Row>
							<div id="img1">
								<img src={img1} alt="" />
							</div>
							<div>
								<div id="img2">
								<img src={img2} alt="" />
								</div>
								<div id="img3">
								<img src={img3} alt="" />
								</div>
							</div>
						</Row>
						</div>
						
					</Col>
				</Row>
			</div>
			<div className="section_1_phone">
				<div id="col1">
							<div id="img1">
								<img src={img1} alt="" />
							</div>
							<div>
								<div id="img2">
								<img src={img2} alt="" />
								</div>
								<div id="img3">
								<img src={img3} alt="" />
								</div>
							</div>
				</div>
				<div id="col2">
				<div className="title">
							WINTER SPICE 2020
						</div>
						
						<div className="text">
							Infusion of summer pieces and cashmere silk blends.
						</div>
						<div className="shopNow">
                <button>
                  <span>
                  Shop now
                  </span>
                  </button>
                </div>
				</div>
			</div>
			<div className="section_2">
				<div className="women-collec1">
					<span className="collec-name">
						CARDIGANS
					</span>
					<img src={arrow} className="arrow-link" alt="" />
				<img src={img4} className="collec-img"  alt="" />
				</div>
				<div className="women-collec2">
				<span className="collec-name">
						DRESSES
					</span>
					<img src={arrow} className="arrow-link" alt="" />
					<span className="collec-col">
						WOMEN
					</span>
					<br />
				<img src={img5} className="collec-img"  alt="" />
				</div>
				<div className="women-collec3">
				<span className="collec-name">
						CARDIGANS
					</span>
					<img src={arrow} className="arrow-link" alt="" />
				<img src={img4} className="collec-img"  alt="" />
				</div>
				

			</div>
			<div className="section_2_mobile">
				<div className="collec-col">
					WOMEN
				</div>
				<div className="collec-content">
				<div className="collec-div">
				<span className="collec-name">
						КАРДИГАНЫ
					</span>
					<img src={arrow_phone} className="arrow-link" alt="" />
				<img src={img4} className="collec-img"   alt="" />
				</div>
				<div>
				<span className="collec-name">
						ПЛАТЬЯ
					</span>
					<img src={arrow_phone} className="arrow-link" alt="" />
				<img src={img5} className="collec-img"  alt="" />
				</div>
				</div>
			</div>
			<div className="section_2_mobile">
				<div className="collec-col">
					MEN
				</div>
				<div className="collec-content">
				<div className="collec-div">
				<span className="collec-name">
					захтай
					</span>
					<img src={arrow_phone} className="arrow-link" alt="" />
				<img src={img6} className="collec-img"   alt="" />
				</div>
				<div>
				<span className="collec-name">
					ПОЛО
					</span>
					<img src={arrow_phone} className="arrow-link" alt="" />
				<img src={img7} className="collec-img"  alt="" />
				</div>
				</div>
			</div>
			<div className="section_2">
				<div className="women-collec1">
				<span className="collec-name">
						TURTLENECK
					</span>
					<img src={arrow} className="arrow-link" alt="" />
					<img src={img6} className="collec-img"  alt="" />
				</div>
				<div className="women-collec2">
				<span className="collec-name">
						POLO
					</span>
					<img src={arrow} className="arrow-link" alt="" />
					<span className="collec-col">
						MEMEN
					</span>
					<br />
				<img src={img7} className="collec-img"  alt="" />
				</div>
				<div className="women-collec3" >
				<span className="collec-name">
						TURTLENECK
					</span>
					<img src={arrow} className="arrow-link" alt="" />
					<img src={img6} className="collec-img"  alt="" />
				</div>
			</div>
			<div className="section_3">
				<span>TO GET AND TO GIFT</span>
			</div>
			<div className="section_4">
				<div className="section_4_items">
					<img src={img8} alt="" />
				</div>
				<div className="section_4_items">
					<img src={img9} alt="" />
				</div>
				<div className="section_4_items">
					<img src={img10} alt="" />
				</div>
				<div className="section_4_items">
					<img src={img11} alt="" />
				</div>
				<div className="section_4_items">
					<img src={img12} alt="" />
				</div>
				<div className="section_4_items">
					<img src={img13} alt="" />
				</div>
				<div className="section_4_items">
					<img src={img14} alt="" />
				</div>
				<div className="section_4_items">
					<img src={img15} alt="" />
				</div>
			</div>
		</div>
	</React.Fragment>
  );
}

export default Home;