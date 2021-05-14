import {
	FormControl,
	FormLabel,
	Input,
	VStack,
	Button,
} from '@chakra-ui/react';

function Loginform() {
	return (
		<VStack spacing='35px'>
			<FormControl id='email' isRequired>
				<FormLabel>Email address</FormLabel>
				<Input type='email' />
			</FormControl>
			<FormControl id='password' isRequired>
				<FormLabel>Password</FormLabel>
				<Input type='password' />
			</FormControl>
			<Button width='100%' colorScheme='teal' variant='solid'>
				Login
			</Button>
		</VStack>
	);
}

export default Loginform;
