import {
	FormControl,
	FormLabel,
	FormHelperText,
	Textarea,
	Input,
	VStack,
	Button,
} from '@chakra-ui/react';

function ContactUsForm() {
	return (
		<VStack spacing='35px' width='45%' minW='325'>
			<FormControl id='name' isRequired>
				<FormLabel>Full Name</FormLabel>
				<Input placeholder='Full Name' focusBorderColor='white' />
			</FormControl>
			<FormControl id='email' isRequired>
				<FormLabel>Email Address</FormLabel>
				<Input
					type='email'
					placeholder='Email Address'
					focusBorderColor='white'
				/>
			</FormControl>
			<FormControl id='message' isRequired>
				<FormLabel>Message:</FormLabel>
				<Textarea placeholder='Enter your message here' size='sm' />
				<FormHelperText>
					We will do our best to get back to you within 24 hours :)
				</FormHelperText>
			</FormControl>
			<Button width='100%' colorScheme='teal' variant='solid'>
				Submit Message
			</Button>
		</VStack>
	);
}

export default ContactUsForm;
