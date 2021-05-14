import {
	HStack,
	FormControl,
	FormLabel,
	FormHelperText,
	Radio,
	RadioGroup,
	Input,
	VStack,
	Button,
} from '@chakra-ui/react';

function RegistrationForm() {
	return (
		<VStack spacing='35px' width='40%'>
			<FormControl id='email' isRequired>
				<FormLabel>Email address</FormLabel>
				<Input type='email' />
				<FormHelperText>We'll never share your email.</FormHelperText>
			</FormControl>
			<FormControl id='password' isRequired>
				<FormLabel>Password</FormLabel>
				<Input type='password' />
			</FormControl>
			<FormControl id='password' isRequired>
				<FormLabel>Comfirm Password</FormLabel>
				<Input type='password' />
			</FormControl>
			<FormControl as='fieldset'>
				<FormLabel as='legend'>Sex</FormLabel>
				<RadioGroup defaultValue='Itachi'>
					<HStack spacing='24px'>
						<Radio value='male'>Male</Radio>
						<Radio value='female'>Female</Radio>
						<Radio value='na'>Prefer not to say</Radio>
					</HStack>
				</RadioGroup>
			</FormControl>
			<Button width='100%' colorScheme='teal' variant='solid'>
				Register
			</Button>
		</VStack>
	);
}

export default RegistrationForm;
