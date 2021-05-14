import { Center, Heading } from '@chakra-ui/react';
import LoginForm from '../../components/LoginForm';

function Login() {
	return (
		<>
			<Heading textAlign='center' paddingTop='5%' as='h1' size='2xl'>
				Login Form
			</Heading>

			<Center width='100%' marginTop='5%'>
				<LoginForm />
			</Center>
		</>
	);
}

export default Login;
