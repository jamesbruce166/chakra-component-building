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

export default function Tables() {
	const router = useRouter();

	return (
		<>
			<Heading textAlign='center' paddingTop='5%' as='h1' size='2xl'>
				Tables
			</Heading>

			<Container paddingTop='10%'>
				<VStack
					divider={<StackDivider borderColor='gray.200' />}
					spacing={4}
					align='stretch'
				>
					<Box h='70px'>
						<Text marginBottom='2%' fontSize='2xl'>
							Simple Table
						</Text>
						<Button
							colorScheme='teal'
							variant='link'
							onClick={() => router.push('/tables/table')}
						>
							Go To Simple Table
						</Button>
					</Box>
					<Box h='70px'>
						<Text marginBottom='2%' fontSize='2xl'>
							Coloured Table
						</Text>
						<Button
							colorScheme='teal'
							variant='link'
							onClick={() => router.push('/tables/coloured')}
						>
							Go To Coloured Table
						</Button>
					</Box>
				</VStack>
			</Container>
		</>
	);
}
