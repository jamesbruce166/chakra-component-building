import { Center, Heading } from '@chakra-ui/react';
import SimpleTable from '../../components/SimpleTable';

function Table() {
	return (
		<>
			<Heading textAlign='center' paddingTop='5%' as='h1' size='2xl'>
				Simple Table
			</Heading>

			<Center width='100%' marginTop='5%'>
				<SimpleTable />
			</Center>
		</>
	);
}

export default Table;
