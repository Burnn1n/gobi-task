import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { product } from "../../components/graphql/query";
import {
	Col,
  Container,
  Row,
} from 'reactstrap';
import './product.css'
import { valueToObjectRepresentation } from "@apollo/client/utilities";
function Product({match}) {
	const handle = match.params.handle;
  const { error, loading, data } = useQuery(product,{
		variables : {handle}
	});
	const [state, setState] = useState({
		colorChecked: "",
		sizeChecked: "",
		materialChecked: ""
  });
	const [productData, setProductData] = useState({});
	const [color, setColor]=useState([]);
	const [size, setSize] = useState([]);
	const [material, setMaterial] = useState([]);
	const [variants, setVariants] = useState([]);
	const [variantPrice, setVariantPrice] = useState(0);
  useEffect(() => {
    if (data) {
				setProductData(data.productByHandle)
				console.log(data, "fetch okay");
			}
  }, [data]);
	useEffect(() => {
				console.log('frea',productData);
				productData.options?.map((val) => {
					if(val.name == "Size")
						setSize(val.values);
					else if(val.name == "Color")
						setColor(val.values);
					else if(val.name == "Material")
						setMaterial(val.values);
				})
				setVariants(productData.variants?.edges);
  }, [productData]);
	useEffect(() => {
		setState({colorChecked: color[0],sizeChecked: size[0], materialChecked: material[0]})
	}, [size,color,material]);
  return (
	<React.Fragment>
		<div className='page-content'>
			<Container>
					{
						<Row>
							<Col sm='9'>
								<img src={productData?.images?.edges[0].node.originalSrc}
								height='476px' width='329px'/>
							</Col>
							<Col sm='3' className='productForm'>
								<h1 className='list'>
									{productData?.title}
								</h1>
								<div className='productPrice list'>
									{productData?.variants?.edges[0].node.priceV2.amount} ₮
								</div>
								<div className='productOption list'>
									{color.map((x)=>(
										<div className= 'colors'>
											<label for={x}>{x}</label>
										<input type="radio" id={x} name="color" value={x}
										/>
										</div>
										))
									}
								</div>
								<div className='productOption list'>
								{size.map((x)=>(
										<div className= 'colors'>
											<label for={x}>{x}</label>
										<input type="radio" id={x} value={x} name="size"
										/>
										</div>
										))
									}
								</div>
								<div className='productOption list'>
								{material.map((x)=>(
										<div className= 'colors'>
											<label for={x}>{x}</label>
										<input type="radio" id={x} name="material" value={x}
										/>
										</div>
										))
									}
								</div>
								<div className="productButtons list">
									<button className="addToCart">Sagslah</button>
									<button className="addToSave">Hadgalah</button>
								</div>
							</Col>
						</Row>
					}
			</Container>
		</div>
	</React.Fragment>
  );
}

export default Product;
/*
<Row>
							<Col sm='8'>
								<img src={val.images.edges[0].node.originalSrc}
								height='476px' width='329px'/>
							</Col>
							<Col sm='4' className='productForm'>
								<h1 className='list'>
									{val.title}
								</h1>
								<div className='productPrice list'>
									{}
								</div>
								<div className='productColor list'>
									Ungu
								</div>
								<div className='productSize list'>
									Hemjee
								</div>
							</Col>
						</Row>
*/