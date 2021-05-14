import { Center, Heading } from '@chakra-ui/react';
import ColouredTable from '../../components/ColouredTable';

function Coloured() {
	return (
		<>
			<Heading textAlign='center' paddingTop='5%' as='h1' size='2xl'>
				Coloured Table
			</Heading>

			<Center width='100%' marginTop='5%'>
				<ColouredTable />
			</Center>
		</>
	);
}

export default Coloured;
