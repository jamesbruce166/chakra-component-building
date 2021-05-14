import {
	Input,
	Button,
	HStack,
	Stack,
	InputGroup,
	InputLeftElement,
	Heading,
	Text,
	Box,
	Flex,
	Center,
} from '@chakra-ui/react';

import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons';

function SubmissionForm() {
	return (
		<Center
			width='600px'
			bg='gray.700'
			p={2}
			color='white'
			borderRadius='8px'
		>
			<Stack width='600px' padding='3%' spacing='15px'>
				<Heading as='h5' size='sm'>
					Share Chakra UI with friends
				</Heading>

				<Text fontSize='xs'>
					Email friends who have never tried Chakra UI
				</Text>

				<Flex justifyContent='space-between'>
					<IconButton text='Facebook' icon={<FaFacebook />} />
					<IconButton text='Twitter' icon={<FaTwitter />} />
					<IconButton text='LinkedIn' icon={<FaLinkedin />} />
				</Flex>

				<HStack>
					<InputGroup>
						<InputLeftElement
							pointerEvents='none'
							children={<EmailIcon color='gray.300' />}
						/>
						<Input
							type='email'
							placeholder='Enter email address'
							bg='gray.800'
						/>
					</InputGroup>

					<Button width='20%' colorScheme='blue'>
						Send
					</Button>
				</HStack>
			</Stack>
		</Center>
	);
}

function IconButton({ text, icon }) {
	return (
		<Button
			variant='outline'
			colorScheme={text.toLowerCase()}
			leftIcon={icon}
			width='32%'
			border='1px'
			borderColor='gray.500'
		>
			{text}
		</Button>
	);
}
export default SubmissionForm;
