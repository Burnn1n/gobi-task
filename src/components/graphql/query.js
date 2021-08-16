import { gql } from '@apollo/client';

export const productAll = gql`
{
	products(first:5) {
		edges {
			node {
				id
				title
				handle
				images(first: 1) {
					edges {
						node {
							id
							altText
							originalSrc
						}
					}
				}
				variants(first: 1){
          edges {
            node {
              priceV2{
                amount
              }
            }
          }
        }
			}
		}
	}
}
`;
export const product = gql`
	query ($handle : String!){
		productByHandle(handle: $handle) {
			id
			title
			handle
			images(first: 1) {
				edges {
					node {
						id
						altText
						originalSrc
					}
				}
			}
			variants(first: 1){
				edges {
					node {
						priceV2{
							amount
						}
					}
				}
			}
			options{
				name
				values
			}
		}
	}
`;
export const collection = gql`
	query ($handle : String!){
		collectionByHandle(handle : $handle){
			id
      title
      products(first:5) {
				edges {
					node {
						id
						title
						handle
						images(first: 1) {
							edges {
								node {
									id
									altText
									originalSrc
								}
							}    
						}
						variants(first: 1){
							edges {
							node {
								priceV2{
								amount
								}
							}
						}
					}
				}
			}
		}
		}
	}
`;
export const collections = gql`
{
  collections(first : 100){
    edges{
      node{
        id
        handle
      }
    }
  }
}
`;
