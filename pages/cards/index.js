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

export default function Cards() {
	const router = useRouter();

	return (
		<>
			<Heading textAlign='center' paddingTop='5%' as='h1' size='2xl'>
				Card Layouts
			</Heading>

			<Container paddingTop='10%'>
				<VStack
					divider={<StackDivider borderColor='gray.200' />}
					spacing={4}
					align='stretch'
				>
					<Box h='70px'>
						<Text marginBottom='2%' fontSize='2xl'>
							Profile Card
						</Text>
						<Button
							colorScheme='teal'
							variant='link'
							onClick={() => router.push('/cards/profile')}
						>
							View Profile Card
						</Button>
					</Box>
					<Box h='70px'>
						<Text marginBottom='2%' fontSize='2xl'>
							Product Card
						</Text>
						<Button
							colorScheme='teal'
							variant='link'
							onClick={() => router.push('/cards/product')}
						>
							View Product Card
						</Button>
					</Box>
				</VStack>
			</Container>
		</>
	);
}
