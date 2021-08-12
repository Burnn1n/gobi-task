import { gql } from '@apollo/client';

export const productAll = gql`
{
	products(first:5) {
		edges {
			node {
				id
				handle
			}
		}
	}
}
`;