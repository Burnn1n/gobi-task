import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';
import './Header.scss'
// Layout Related Components
import Header from './Header';
import Footer from './Footer';
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
          */}
          <Header/>
          <div className='main-content'>
            {this.props.children}
          </div>
          {/* <Footer /> */}
          <Footer/>
        </div>
        {/* <Rightbar /> */}
      </React.Fragment>
    );
  }
}

export default(withRouter(Layout));
