import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { collection } from "../../components/graphql/query";
import {
  Container,
  Row,
} from 'reactstrap';
import './index.css'
function Products({history,match}) {
	const handle = match.params.handle;	//collection ner
  const { error, loading, data } = useQuery(collection,{
    variables: {handle}
  });
  console.log('aldaa ',error);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.collectionByHandle.products.edges);
			console.log(data, "fetch okay");
    }
  }, [data]);
	console.log(users);
  return (
	<React.Fragment>
		<div className='page-content'>
			<Container>
				<h1>
					{handle}
				</h1>
				<hr/>
				<Row>
				{users.length > 0 && users.map((val) => {
        return (
					<div className='product-card col-6 col-md-3'>
            <div className='product-card-items'>
            <div className='product-items-img'>
            <img src={val.node.images.edges[0].node.originalSrc} alt={val.node.title} width='210px' height='300px'
            onClick={() =>
              history.push(
                `/product/${val.node.handle}`
              )
            } style={{cursor:'pointer'}}/>
            </div>
						<div className='product-items-title'onClick={() =>
              history.push(
                `/product/${val.node.handle}`
              )
            } style={{cursor:'pointer'}}>{val.node.title}</div>
            <div className='product-items-price'>{
              new Intl.NumberFormat().format(
                val.node.variants.edges[0].node.priceV2.amount
              )
            }</div>
            </div>
					</div>
        );
      	})}
				</Row>
			</Container>
		</div>
	</React.Fragment>
  );
}

export default Products;