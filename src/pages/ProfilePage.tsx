import { Row, Col, Alert, Card, CardBody } from 'reactstrap';
import PageTitle from "../components/PageTitle";
import UserBox from '../components/UserBox';
import { Await, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { RecruiterLoader } from '../routes/loaders/recruiterLoader';
import { Suspense } from 'react';
import LoaderCmp from '../components/LoaderCmp';
import { NimblUser } from '../types';

type Props = {

};

const Loader = () => (
	<Card>
		<CardBody className='min-height-100px'>
			<LoaderCmp />
		</CardBody>
	</Card>
);
const ProfilePage = ({}: Props) => {
	const loaderData = useLoaderData() as RecruiterLoader;
	return (
		<>
			<PageTitle title={'My Profile'}/>
			<Row>
				<Col lg={6}>
					{/* User information */}
					<Suspense fallback={<Loader />}>
						<Await resolve={loaderData.recruiter}
							errorElement={<Alert color="danger">Error loading expenses</Alert>}
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
