import {
	Heading,
	Avatar,
	Box,
	Center,
	Text,
	Stack,
	Button,
	Link,
	Badge,
	useColorModeValue,
} from '@chakra-ui/react';

function ProfileCard() {
	return (
		<Center py={6}>
			<Box
				maxW={'320px'}
				w={'full'}
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'2xl'}
				rounded={'lg'}
				p={6}
				textAlign={'center'}
			>
				<Avatar
					size={'xl'}
					src={
						'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
					}
					alt={'Avatar Alt'}
					mb={4}
					pos={'relative'}
				/>
				<Heading fontSize={'2xl'} fontFamily={'body'}>
					Jane Doe
				</Heading>
				<Text fontWeight={600} color={'gray.500'} mb={4}>
					@jane_doe3
				</Text>
				<Text
					textAlign={'center'}
					color={useColorModeValue('gray.700', 'gray.400')}
					px={3}
				>
					Graphic Designer, Web Design, App Design, Logo Design, and
					more... PM for work inquires or{' '}
					<Link href={'#'} color={'blue.400'}>
						#tag
					</Link>{' '}
					me in your posts
				</Text>

				<Stack
					align={'center'}
					justify={'center'}
					direction={'row'}
					mt={6}
				>
					<Badge
						px={2}
						py={1}
						bg={useColorModeValue('gray.50', 'gray.800')}
						fontWeight={'400'}
					>
						#illustrator
					</Badge>
					<Badge
						px={2}
						py={1}
						bg={useColorModeValue('gray.50', 'gray.800')}
						fontWeight={'400'}
					>
						#adobexd
					</Badge>
				</Stack>

				<Stack mt={8} direction={'row'} spacing={4}>
					<Button
						flex={1}
						fontSize={'sm'}
						rounded={'full'}
						_focus={{
							bg: 'gray.200',
						}}
					>
						Message
					</Button>
					<Button
						flex={1}
						fontSize={'sm'}
						rounded={'full'}
						bg={'blue.400'}
						color={'white'}
						boxShadow={
							'0px 1px 25px -5px rgb(66 153 225 / 38%), 0 10px 10px -5px rgb(66 153 225 / 33%)'
						}
						_hover={{
							bg: 'blue.500',
						}}
						_focus={{
							bg: 'blue.500',
						}}
					>
						Follow
					</Button>
				</Stack>
			</Box>
		</Center>
	);
}

export default ProfileCard;
