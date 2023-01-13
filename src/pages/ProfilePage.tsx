import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import PageTitle from "../components/PageTitle";
import UserBox from '../components/UserBox';
import { useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import { RootLoader } from '../routes/loaders/rootLoader';

type Props = {

};

const ProfilePage = ({}: Props) => {
	const [activeTab, setActiveTab] = useState('1');
	const { nimblUser } = useRouteLoaderData('MainLayout') as RootLoader;
	const toggleTab = (tab: string) => {
		if(activeTab !== tab){
			setActiveTab(tab);
		}
	};

	const handleRefresh = () => {}

	return (
		<>
			<PageTitle handleRefresh={handleRefresh} title={'My Profile'}/>
			<Row>
				<Col lg={3}>
					{/* User information */}
					<UserBox nimblUser={nimblUser} />
				</Col>

				<Col lg={9}>
					<Card>
						<CardBody>
							<Nav className="nav nav-pills navtab-bg nav-justified">
								<NavItem>
									<NavLink
										href="#"
										className={classNames({ active: activeTab === '1' })}
										onClick={() => { toggleTab('1'); }}
									>My invoices</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										href="#"
										className={classNames({ active: activeTab === '2' })}
										onClick={() => { toggleTab('2'); }}
									>Expences</NavLink>
								</NavItem>
							</Nav>
							<TabContent activeTab={activeTab}>
								<TabPane tabId="1">
									{/* <Activities /> */}
								</TabPane>
								<TabPane tabId="2">
									{/* <Messages /> */}
								</TabPane>
							</TabContent>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default ProfilePage;
