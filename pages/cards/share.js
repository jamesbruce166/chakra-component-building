import { Center, Heading } from '@chakra-ui/react';
import SubmisionForm from '../../components/SubmissionForm';

function Share() {
	return (
		<>
			<Heading textAlign='center' paddingTop='5%' as='h1' size='2xl'>
				Share Card
			</Heading>

			<Center width='100%' marginTop='5%'>
				<SubmisionForm />
			</Center>
		</>
	);
}

export default Share;
