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
				<img src={img4}  alt="" />
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
				<img src={img5}  alt="" />
				</div>
				<div className="women-collec3">
				<span className="collec-name">
						CARDIGANS
					</span>
					<img src={arrow} className="arrow-link" alt="" />
				<img src={img4}  alt="" />
				</div>
				

			</div>
			<div className="section_2">
				<div className="women-collec1">
				<span className="collec-name">
						TURTLENECK
					</span>
					<img src={arrow} className="arrow-link" alt="" />
					<img src={img6}  alt="" />
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
				<img src={img7}  alt="" />
				</div>
				<div className="women-collec3" >
				<span className="collec-name">
						TURTLENECK
					</span>
					<img src={arrow} className="arrow-link" alt="" />
					<img src={img6}  alt="" />
				</div>
			</div>
			<div className="section_3">
				<span>TO GET AND TO GIFT</span>
			</div>
			<div className="section_4">
				
			</div>
		</div>
	</React.Fragment>
  );
}

export default Home;