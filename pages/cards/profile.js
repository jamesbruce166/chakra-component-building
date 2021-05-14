import { Center, Heading } from '@chakra-ui/react';
import ProfileCard from '../../components/ProfileCard';

function Profile() {
	return (
		<>
			<Heading textAlign='center' paddingTop='5%' as='h1' size='2xl'>
				Profile Card
			</Heading>

			<Center width='100%' marginTop='5%'>
				<ProfileCard />
			</Center>
		</>
	);
}

export default Profile;
