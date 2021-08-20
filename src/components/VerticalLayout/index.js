import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css'
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
          <Header/>
          <div className='main-content' style={{ zIndex: '3000' }}>
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
