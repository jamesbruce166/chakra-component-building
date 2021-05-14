import { Center, Heading } from '@chakra-ui/react';
import ContactUsForm from '../../components/ContactUsForm';

function Contact() {
	return (
		<>
			<Heading textAlign='center' paddingTop='5%' as='h1' size='2xl'>
				Contact Us Form
			</Heading>

			<Center width='100%' marginTop='5%'>
				<ContactUsForm />
			</Center>
		</>
	);
}

export default Contact;
