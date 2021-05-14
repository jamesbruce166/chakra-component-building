import { useRouter } from 'next/router';
import {
	Heading,
	Container,
	StackDivider,
	VStack,
	Box,
	Button,
	Text,
	useColorMode,
} from '@chakra-ui/react';

export default function Home() {
	const router = useRouter();
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Heading textAlign='center' paddingTop='5%' as='h1' size='2xl'>
				Chakra Component Building <br />
				<Button onClick={toggleColorMode}>
					Enable {colorMode === 'light' ? 'Dark' : 'Light'} Mode
				</Button>
			</Heading>

			<Container paddingTop='10%'>
				<VStack
					divider={<StackDivider borderColor='gray.200' />}
					spacing={4}
					align='stretch'
				>
					<Box h='70px'>
						<Text marginBottom='2%' fontSize='2xl'>
							Forms
						</Text>
						<Button
							colorScheme='teal'
							variant='link'
							onClick={() => router.push('/forms')}
						>
							Browse Forms
						</Button>
					</Box>
					<Box h='70px'>
						<Text marginBottom='2%' fontSize='2xl'>
							Tables
						</Text>
						<Button
							colorScheme='teal'
							variant='link'
							onClick={() => router.push('/tables')}
						>
							Browse Tables
						</Button>
					</Box>
					<Box h='70px'>
						<Text marginBottom='2%' fontSize='2xl'>
							Card Designs
						</Text>
						<Button
							colorScheme='teal'
							variant='link'
							onClick={() => router.push('/cards')}
						>
							Browse Cards
						</Button>
					</Box>
					<Box h='70px'>
						<Text marginBottom='2%' fontSize='2xl'>
							Full Page Layouts
						</Text>
						<Button
							colorScheme='teal'
							variant='link'
							onClick={() => router.push('/pages')}
						>
							Browse Pages
						</Button>
					</Box>
				</VStack>
			</Container>
		</>
	);
}
