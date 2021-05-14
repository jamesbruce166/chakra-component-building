import { Center, Heading } from '@chakra-ui/react';
import ProductCard from '../../components/ProductCard';

function Product() {
	return (
		<>
			<Heading textAlign='center' paddingTop='5%' as='h1' size='2xl'>
				Product Card
			</Heading>

			<Center width='100%' marginTop='5%'>
				<ProductCard />
			</Center>
		</>
	);
}

export default Product;
