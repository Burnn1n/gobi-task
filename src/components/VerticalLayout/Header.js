
import React, { useState, useEffect, useContext } from 'react';
import './Header.css'
import { collections } from "../../components/graphql/query";
import { useQuery } from "@apollo/client";
import CartStateContext from "../../contexts/cart";
import {
  Row,
  Form,
  Col,
  Modal,
} from 'reactstrap';
const Header = ({history}) => {
  const items = useContext(CartStateContext);
  const { error, loading, data } = useQuery(collections);
  const [collectionName, setCollectionName] = useState([]);
  useEffect(() => {
    if (data) {
      setCollectionName(data.collections.edges);
    }
  }, [data]);
  /*
  useEffect(()=>{
    if(state.email && state.password){
      const {error1, loading1,loginData} = useQuery(getToken,
        {variables:{email:state.email,password:state.password}
        });
    }
  },[state.email,state.password]);
  */
  const [state, setState] = useState({
    email: '',
    regEmail: '',
    password: '',
    fName: '',
    lName: '',
    phone: '',
    error: '',
  });
  useEffect(() => {
    console.log(state.password);
  }, [state.password]);
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, email: e.target.email.value, password: e.target.password.value });
    // props.loginUser(values, history)
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, regEmail: e.target.email.value, password: e.target.password.value, fname: e.target.fName.value,
    lName: e.target.lName.value, phone: e.target.phone.value });
    // props.loginUser(values, history)
  };
  //on
  useEffect(() => {
    console.log("done");
      const getToken = {query: `
      mutation{
        customerCreate(input:{
          firstName:"${state.fName}",
          lastName:"${state.lName}",
          email:"${state.regEmail}",
          phone:"+976${state.phone}",
          password:"${state.password}"
          }
        ){
          customer {
            id
          }
          customerUserErrors {
            code
            field
            message
          }
        }
      }
      `};
      fetch("https://tough-one-store.myshopify.com/api/2021-07/graphql.json", {
        method: 'POST',
        headers: {
          'X-Shopify-Storefront-Access-Token':"7545a37426037781068f8066f1190342",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getToken),
      })
        .then((res) => {
          return res.json();
        })
        .then((resData) => {
          if (resData.data.customerCreate.customerUserErrors.length === 0) {
            console.log("amjilttai burtgew");
            window.location.reload();
          }
          else {
            console.log("FAILED");
            let error = resData.data.customerCreate.customerUserErrors[0].message;
            setState({ ...state, error: error });
          }
        })
        .catch((error) => {
          console.log(error);
        });
  }, [state.regEmail, state.password, state.lName, state.fName, state.phone]);
  //on register
  useEffect(() => {
    if (state.email && state.password) {
      const getToken = {query: `
      mutation{
        customerAccessTokenCreate(input: {email:"${state.email}",password:"${state.password}"}) {
          customerAccessToken {
            accessToken
            expiresAt
          }
          customerUserErrors {
            code
            field
            message
          }
        }
      }
      `};
      fetch("https://tough-one-store.myshopify.com/api/2021-07/graphql.json", {
        method: 'POST',
        headers: {
          'X-Shopify-Storefront-Access-Token':"7545a37426037781068f8066f1190342",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getToken),
      })
        .then((res) => {
          return res.json();
        })
        .then((resData) => {
          if (resData.data.customerAccessTokenCreate.customerUserErrors.length === 0) {
            localStorage.setItem(
              'userToken',
              JSON.stringify(resData.data.customerAccessTokenCreate.customerAccessToken.accessToken)
            );
            window.location.reload();
          } 
          else {
            setState({ ...state, error: "И-Мэйл хаяг эсвэл нууц үг буруу" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [state.email, state.password]);

  const [modal_login, setModal_login] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <React.Fragment>
    <header className='containing'>
      <div className='logo'>
      <a href='/'>
        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/berserk-logo-edith-atresia.jpg"
        alt='Gobi Logo' width='50px' height='50px'/>
      </a>
      </div>
      <div className='categories'>
      <div className="navigation">
			<ul>
				<li>
				Category &#9662;
					<ul>
					{collectionName.length > 0 && collectionName.map((val) => {
            let link = "/collection/" + val.node.handle;
        return (
            <a href={link}>
              <li>{val.node.handle}</li>
            </a>
        );
      	})}
					</ul>
				</li> 
			</ul>
		</div>
      </div>
      <div className="auth">
        <span onClick={()=> setModal_login(true)} style={{cursor:'pointer'}}>
          {localStorage.getItem('userToken').length !== 0? "Миний хаяг" : "Нэвтрэх"}
        </span>
        <a href="/cart">Сагс ({JSON.parse(localStorage.getItem('cartItems')).length })</a>
        <span onClick={()=>{
          localStorage.setItem('userToken',"");
          window.location.reload();
          }}
          style={{cursor:"pointer"}}
          >
          {localStorage.getItem('userToken').length !==0? "Гарах" : ""}
        </span>
      </div>
      
      
    </header>
    <Modal  isOpen={modal_login} centered={true}>
      <div style={{padding:'18px'}}>
      <button
      type='button'
      onClick={() => setModal_login(false)}
      className='close'
      data-dismiss='modal'
      aria-label='Close'
      >
        <span aria-hidden='true'>&times;</span>
      </button>
      <div className="loginLogo">
        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/berserk-logo-edith-atresia.jpg" alt="logo"
        height="50px" width="50px" style={{textAlign:'center'}} />
      </div>
      <div className="loginContainer" style={{ paddingLeft: '48px',paddingRight:'48px', margin: '0' }}>
        <Form className={isLogin?"":"squash"} onSubmit={(e,v)=>handleLoginSubmit(e,v)}>
          <h1 style={{textAlign:'center'}}>Нэвтрэх</h1>
          <Col sm='12' style={{marginBottom: '12px'}}>
            <input type="text" placeholder="Нэвтрэх нэр" className="login-input" name="email" required/>
          </Col>
          <Col sm='12' style={{marginBottom: '12px'}}>
            <input type="password" placeholder="Нууц үг" className="login-input" name="password" required/>
          </Col>
          <div className="login-error">{state.error}</div>
          <div className="form-button">
            <button className="checkout-btn" type="submit">
              Нэвтрэх
            </button>
          </div>
          <div className="form-bottom">
            Шинэ хэрэглэгч
            <span className="register" onClick={()=> setIsLogin(false)}>Бүртгэл үүсгэх</span>
          </div>
        </Form>
        <Form className={isLogin?"squash":""} onSubmit={(e,v)=>handleRegisterSubmit(e,v)}>
          <h1 style={{textAlign:'center'}}>Бүртгүүлэх</h1>
          <Col sm='12' style={{marginBottom: '12px'}}>
            <input type="text" placeholder="Овог" className="login-input" name="fName" required/>
          </Col>
          <Col sm='12' style={{marginBottom: '12px'}}>
            <input type="text" placeholder="Нэр" className="login-input" name="lName" required/>
          </Col>
          <Col sm='12' style={{marginBottom: '12px'}}>
            <input type="email" placeholder="И-мэйл хаяг" className="login-input" name="email" required/>
          </Col>
          <Col sm='12' style={{marginBottom: '12px'}}>
            <input type="password" placeholder="Нууц үг" className="login-input" name="password" required/>
          </Col>
          <Col sm='12' style={{marginBottom: '12px'}}>
            <input type="number" placeholder="Утасны дугаар" className="login-input" name="phone" required/>
          </Col>
          <div className="login-error">{state.error}</div>
          <div className="form-button">
            <button className="checkout-btn" type="submit">
              Үүсгэх
            </button>
          </div>
          <div className="form-bottom">
            <span className="register" onClick={()=> setIsLogin(true)}>Нэвтрэх</span>
          </div>
        </Form>
      </div>
      </div>
    </Modal>
    </React.Fragment>
  );
};

export default Header;
