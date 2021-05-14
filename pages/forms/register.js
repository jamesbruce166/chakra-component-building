import { Center, Heading } from '@chakra-ui/react';
import RegisterForm from '../../components/RegistrationForm';

function Register() {
	return (
		<>
			<Heading textAlign='center' paddingTop='5%' as='h1' size='2xl'>
				Registration Form
			</Heading>

			<Center width='100%' marginTop='5%'>
				<RegisterForm />
			</Center>
		</>
	);
}

export default Register;
