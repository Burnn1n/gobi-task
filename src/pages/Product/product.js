import React, { useEffect, useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { product } from "../../components/graphql/query";
import {
	Col,
  Container,
  Row,
} from 'reactstrap';
import './product.css'
import { CartDispatchContext, addToCart } from "../../contexts/cart";
function Product({match}) {
	const handle = match.params.handle;
  const { data } = useQuery(product,{
		variables : {handle}
	});
	const [colorChecked, setColorChecked] = useState("");
	const [sizeChecked, setSizeChecked] = useState("");
	const [materialChecked, setMaterialChecked] = useState("");
	const [productData, setProductData] = useState({});
	const [color, setColor]=useState([]);
	const [size, setSize] = useState([]);
	const [material, setMaterial] = useState([]);
	const [variants, setVariants] = useState([]);
  useEffect(() => {
    if (data) {
				setProductData(data.productByHandle)
				console.log(data, "fetch okay");
			}
  }, [data]);
	useEffect(() => {
				console.log('frea',productData);
				productData.options?.map((val) => {
					if(val.name === "Size")
						setSize(val.values);
					else if(val.name === "Color")
						setColor(val.values);
					else if(val.name === "Material")
						setMaterial(val.values);
				})
				setVariants(productData.variants?.edges);
  }, [productData]);
	useEffect(() => {
		setColorChecked(color[0]);
		setMaterialChecked(material[0]);
		setSizeChecked(size[0]);
	}, [size,color,material]);
	const handleSizeChange = (e) => {
		setSizeChecked(e.currentTarget.value);
	}
	const handleColorChange = (e) => {
		setColorChecked(e.currentTarget.value);
	}
	const handleMaterialChange = (e) => {
		setMaterialChecked(e.currentTarget.value);
	}
	//cart
	const dispatch = useContext(CartDispatchContext);

	const handleAddToCart = () => {

		//options
		var variantQuantity;
		var variantPrice;
		var isVariant = false;
		if(materialChecked === undefined && sizeChecked === undefined && colorChecked === undefined){
		}
		else{
			let valueArr = [sizeChecked, colorChecked, materialChecked];
			for (let index = 0; index < valueArr.length; index++) {
				if(valueArr[index] === undefined){
					valueArr.splice(index,1);
					index--;
				}
			}
			variants.map((val)=>{
				let arr = val.node.title.split(" / ");
				if(JSON.stringify(valueArr) === JSON.stringify(arr)){
					isVariant = true;
					variantQuantity = val.node.quantityAvailable;
					variantPrice = val.node.priceV2.amount;
				}
			})
		}
		console.log(isVariant);
		//
		let cartOption = {};
		if(JSON.stringify(material) === JSON.stringify([])){
			if(JSON.stringify(color) === JSON.stringify([])){
				if(JSON.stringify(size) === JSON.stringify([])){
					cartOption = null;
				}
				//only size
				else{
					cartOption = {quantity: variantQuantity,price: variantPrice, size: sizeChecked}
				}
			}
			else{
				//only color
				if(size === JSON.stringify([])){
					cartOption = {quantity: variantQuantity,price: variantPrice, color: colorChecked};
				}
				//only color and size
				else{
					cartOption = {quantity: variantQuantity,price: variantPrice, size: sizeChecked, color: colorChecked}
				}
			}
		}
		else{
			if(JSON.stringify(color) === JSON.stringify([])){
				// only material
				if(JSON.stringify(size) === JSON.stringify([])){
					cartOption = {quantity: variantQuantity,price: variantPrice, material: materialChecked};
				}
				// material size
				else{
					cartOption = {quantity: variantQuantity,price: variantPrice, size: sizeChecked, material: materialChecked}
				}
			}
			else{
				//material color
				if(JSON.stringify(size) === JSON.stringify([])){
					console.log("too ni ",variants[0].node.quantityAvailable);
					cartOption = {quantity: variantQuantity,price: variantPrice, 
						color: colorChecked, material: materialChecked};
				}
				//material color size
				else{
					cartOption = {quantity: variantQuantity,price: variantPrice, 
						size: sizeChecked, color: colorChecked, material: materialChecked}
				}
			}
		}
		console.log(cartOption);
    const product = { ...data.productByHandle, quantity: 1 };
		if(isVariant){
			
			alert("Амжилттай сагсанд нэмэгдлээ");
			addToCart(dispatch, data.productByHandle, cartOption);
			console.log("Ywuulah data ",data.productByHandle);
			window.location.reload();
		}
		else{
			if(cartOption === null){
				alert("Амжилттай сагсанд нэмэгдлээ");
				addToCart(dispatch, data.productByHandle, cartOption);	
			}
			else{
				alert("Үлдэгдэл 0 өөр төрлийг сонгоно уу");
			}
				
		}
  };
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
								{size.map((x)=>(
										<div className= 'colors'>
											<label for={x}>{x}</label>
										<input type="radio" id={x} value={x} name="size" onChange={handleSizeChange} checked={sizeChecked === x}
										/>
										</div>
										))
									}
								</div>
								<div className='productOption list'>
									{color.map((x)=>(
										<div className= 'colors'>
											<label for={x}>{x}</label>
										<input type="radio" id={x} name="color" value={x} onChange={handleColorChange} checked={colorChecked === x}
										/>
										</div>
										))
									}
								</div>
								<div className='productOption list'>
								{material.map((x)=>(
										<div className= 'colors'>
											<label for={x}>{x}</label>
										<input type="radio" id={x} name="material" value={x} onChange={handleMaterialChange} checked={materialChecked === x}
										/>
										</div>
										))
									}
								</div>
								<div className="productButtons list">
									<button className="addToCart" onClick={handleAddToCart}>Sagslah</button>
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