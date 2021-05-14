import { useRouter } from 'next/router';
import {
	Heading,
	Container,
	StackDivider,
	VStack,
	Box,
	Button,
	Text,
} from '@chakra-ui/react';

export default function Forms() {
	const router = useRouter();

	return (
		<>
			<Heading textAlign='center' paddingTop='5%' as='h1' size='2xl'>
				Forms
			</Heading>

			<Container paddingTop='10%'>
				<VStack
					divider={<StackDivider borderColor='gray.200' />}
					spacing={4}
					align='stretch'
				>
					<Box h='70px'>
						<Text marginBottom='2%' fontSize='2xl'>
							Register Form
						</Text>
						<Button
							colorScheme='teal'
							variant='link'
							onClick={() => router.push('/forms/register')}
						>
							Go To Register Form
						</Button>
					</Box>
					<Box h='70px'>
						<Text marginBottom='2%' fontSize='2xl'>
							Login Form
						</Text>
						<Button
							colorScheme='teal'
							variant='link'
							onClick={() => router.push('/forms/login')}
						>
							Go To Login Form
						</Button>
					</Box>
					<Box h='70px'>
						<Text marginBottom='2%' fontSize='2xl'>
							Contact Us Form
						</Text>
						<Button
							colorScheme='teal'
							variant='link'
							onClick={() => router.push('/forms/contact')}
						>
							Go To Contact Form
						</Button>
					</Box>
				</VStack>
			</Container>
		</>
	);
}
