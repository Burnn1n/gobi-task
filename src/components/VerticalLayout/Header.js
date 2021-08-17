
import React, { useState, useEffect, useContext } from 'react';
import './Header.css'
import { collections } from "../../components/graphql/query";
import { useQuery } from "@apollo/client";
import CartStateContext from "../../contexts/cart";
const Header = ({history}) => {
  const items = useContext(CartStateContext);
  const { error, loading, data } = useQuery(collections);
  const [collectionName, setCollectionName] = useState([]);
  useEffect(() => {
    if (data) {
      setCollectionName(data.collections.edges);
    }
  }, [data]);

  return (
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
      <div style={{color:'white'}}>
        <a href="/cart">Сагс ({items})</a>
      </div>
    </header>
  );
};

export default Header;
