import React, { useEffect, useState } from "react";
import {
	Col,
  Container,
  Row,
} from 'reactstrap';
import img1 from '../../assets/images/page/img1.png'
import img2 from '../../assets/images/page/img2.png'
import img3 from '../../assets/images/page/img3.png'
import './index.scss'
function Home({history}) {
  return (
	<React.Fragment>
		<div className='page-content'>
			<div className="section_1 mx-0">
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
						<Row>
							<div id="img1">
								<img src={img1} alt="" />
							</div>
							<div>
								<div id="img2">
								<img src={img2} alt="" />
								</div>
								<div>
								<img src={img3} alt="" />
								</div>
							</div>
						</Row>
					</Col>
				</Row>
			</div>

			<div>first</div>
			<div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>first</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div><div>hey</div>v
		</div>
	</React.Fragment>
  );
}

export default Home;