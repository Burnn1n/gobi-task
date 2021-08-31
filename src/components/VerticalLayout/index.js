import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';
import header_img from '../../assets/images/header/header_img.png'
import gobi from '../../assets/images/header/gobi.png'
import global_icon from '../../assets/images/header/global-icon.png'
import search_x from '../../assets/images/header/search-x.png'
import search from '../../assets/images/header/search_1.png'
import menu from '../../assets/images/header/menu.png'
import './Header.scss'
// Layout Related Components
import Header from './Header';
class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div id='layout-wrapper'>
          {/*
          dynamic header
          
          */}<Header/>
          <div className="static-header">
            <div className="detail-banner">
              <div className="left">
                <div className="detail-left-items">
                  <span>
                  <img src={global_icon} height="18px" width="18px"/>
                </span></div>
                <div className="detail-left-items">
                <span className="detail-texts">
                  Global-English
                </span>
                </div>
                
              </div>
              <div className="middle">
                <span className="detail-texts">
                  RETURNING AN ORDER?
                </span>
                <span className="detail-texts link"> 
                  Click for more info
                </span>
              </div>
              <div className="right">
                <span className="detail-texts button">
                  Sign in 
                </span>
                <span className="detail-texts button">
                  Sign out
                </span>
              </div>
            </div>
            <div className="header-menu">
              <div className="header">
                <div className="left">
                  <div className="desktop-cat">
                  <div className="cat-item">
                  <span className="cat-text"> 
                    WOMEN
                  </span>
                </div>
                <div className="cat-item">
                <span className="cat-text">
                    MEN
                  </span>
                </div>
                <div className="cat-item">
                <span className="cat-text">
                    HOME
                  </span>
                </div>
                <div className="cat-item">
                <span className="cat-text">
                    ACCESSORIES
                  </span>
                </div>
                <div className="cat-item">
                <span className="cat-text">
                    ORGANIC
                  </span>
                </div>
                  </div>
                  <div className="tablet-mobile-cat">
                    <div className="menu-and-search">
                      <img src={menu} alt="" />
                    </div>
                    <div className="menu-and-search">
                      <img src={search} alt="" />
                    </div>
                  </div>
                </div>
                <div className="middle">
                  <img src={gobi} alt="" className="img1" />      
                </div>
                <div className="right">
                  <div className="srch">
                  <form action="">
                    <div className="search">
                    <input type="text" placeholder="Search"/>
                    <img src={search_x}/>
                    </div>
                  </form>
                  </div>
                  <div className="wish-and-cart">
                  <svg width="20.27" height="18.71" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6671 17.1277C10.2733 17.4562 9.69541 17.4562 9.30153 17.1277C6.53706 14.8222 0.294293 10.0639 1.06545 5.59283C1.616 2.18965 3.78149 1.04251 5.32302 1.00427C7.78706 0.911482 9.31462 2.35649 9.80858 2.91232C9.89915 3.01423 10.0695 3.01423 10.1601 2.91232C10.6541 2.35649 12.1816 0.911482 14.6456 1.00427C16.1872 1.04251 18.3527 2.18965 18.9399 5.59283C19.6776 10.064 13.4319 14.8223 10.6671 17.1277Z"
                    stroke="white" stroke-miterlimit="10">
                    </path>
                  </svg>
                  </div>
                  <div className="wish-and-cart">
                  <svg width="19" height="19" viewBox="0 0 16 18" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9965 15.5595L15.0045 3.95332C14.9832 3.69566 14.7742 3.50056 14.5297 3.50056H11.4224C11.394 1.56437 9.87062 -4.95911e-05 8 -4.95911e-05C6.12938 -4.95911e-05 4.60596 1.56437 4.57762 3.50056H1.47028C1.22228 3.50056 1.01679 3.69566 0.995537 3.95332L0.0035429 15.5595C0.0035429 15.5742 0 15.5889 0 15.6036C0 16.9251 1.16559 18 2.60044 18H13.3996C14.8344 18 16 16.9251 16 15.6036C16 15.5889 16 15.5742 15.9965 15.5595ZM8 0.993815C9.34274 0.993815 10.4375 2.11283 10.4658 3.50056H5.53418C5.56253 2.11283 6.65726 0.993815 8 0.993815ZM13.3996 17.0061H2.60044C1.70056 17.0061 0.970738 16.3877 0.956566 15.6257L1.90605 4.49811H4.57408V6.00731C4.57408 6.28339 4.78665 6.50424 5.05236 6.50424C5.31807 6.50424 5.53064 6.28339 5.53064 6.00731V4.49811H10.4658V6.00731C10.4658 6.28339 10.6784 6.50424 10.9441 6.50424C11.2098 6.50424 11.4224 6.28339 11.4224 6.00731V4.49811H14.0904L15.0434 15.6257C15.0293 16.3877 14.2959 17.0061 13.3996 17.0061Z"
                      fill="#fff">
                    </path>
                  </svg>
                  </div>
                </div>
              </div>
              <div className="detail">
                <div className="summer">
                  SUMMER
                </div>
                <div className="sale">
                  Sale
                </div>
                <div className="saleStyle">
                  <span id="span1">
                    UPTO
                  </span>
                  <span id="span2">
                    60
                    <span id="span2_1">%</span>
                  </span>
                  <span id="span3">
                    FF
                  </span>
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
          </div>
          <div className='main-content'>
            {this.props.children}
          </div>
          {/* <Footer /> */}
        </div>
        {/* <Rightbar /> */}
      </React.Fragment>
    );
  }
}

export default(withRouter(Layout));
