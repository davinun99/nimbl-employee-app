
import { Suspense, useState } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import { Alert, Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import classNames from 'classnames';

import PageTitle from "../components/PageTitle";
import UserBox from "../components/UserBox";
import { RootLoader } from "../routes/loaders/rootLoader";
import LoaderCmp from "../components/LoaderCmp";
import InvoiceTab from "../components/InvoiceTab";
import ExpensesTab from "../components/ExpensesTab";


const RootPage = () => {
	const [activeTab, setActiveTab] = useState('1');
	const loaderData = useRouteLoaderData('MainLayout') as RootLoader;
	const toggleTab = (tab: string) => {
		if(activeTab !== tab){
			setActiveTab(tab);
		}
	};
	return (
		<>
			<PageTitle title={'Welcome!'}/>
			<Row>
				<Col lg={3}>
					{/* User information */}
					<UserBox nimblUser={loaderData.nimblUser} />
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
									>Expenses</NavLink>
								</NavItem>
							</Nav>
							<TabContent activeTab={activeTab}>
								<TabPane tabId="1">
									<Suspense fallback={<LoaderCmp/>}>
										<Await resolve={loaderData.invoices}
											errorElement={<Alert color="danger">Error loading invoices</Alert>}
										>
											{invoices => <InvoiceTab invoices={invoices} />}
										</Await>
									</Suspense>
								</TabPane>
								<TabPane tabId="2">
									<Suspense fallback={<LoaderCmp/>}>
										<Await resolve={loaderData.expenses}
											errorElement={<Alert color="danger">Error loading expenses</Alert>}
										>
											{expenses => <ExpensesTab expenses={expenses} />}
										</Await>
									</Suspense>
								</TabPane>
							</TabContent>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default RootPage;
