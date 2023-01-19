import { Suspense } from 'react';
import { Row, Col, Alert } from 'reactstrap';
import PageTitle from "../components/PageTitle";
import UserBox from '../components/UserBox';
import { Await, useLoaderData } from 'react-router-dom';
import { RecruiterLoader } from '../routes/loaders/recruiterLoader';
import { NimblUser } from '../types';
import LoaderInCard from '../components/LoaderInCard';

type Props = {};

const ProfilePage = ({}: Props) => {
	const loaderData = useLoaderData() as RecruiterLoader;
	return (
		<>
			<PageTitle title={'My Profile'}/>
			<Row>
				<Col lg={6}>
					{/* User information */}
					<Suspense fallback={<LoaderInCard />}>
						<Await resolve={loaderData.recruiter}
							errorElement={<Alert color="danger">Error loading your profile info</Alert>}
						>
							{(recruiter: NimblUser) => <UserBox nimblUser={recruiter} />}
						</Await>
					</Suspense>
				</Col>
			</Row>
		</>
	)
}

export default ProfilePage;
