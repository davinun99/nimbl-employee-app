import { Suspense } from "react"
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import TopBar from "./Topbar";

const EmptyLoader = () => <div></div>;

const MainLayout = () => {
	return (
		<div className="app">
			<div className="wrapper">
				<Suspense fallback={<EmptyLoader />}>
					<TopBar/>
				</Suspense>
				<Suspense fallback={<EmptyLoader />}>
					<LeftSidebar />
				</Suspense>
				<div className="content-page">
					<div className="content">
						<Container fluid>
							<Suspense fallback={<EmptyLoader/>}>
								<Outlet/>
							</Suspense>
						</Container>
					</div>
				</div>
				<Suspense fallback={<EmptyLoader />}>
					<Footer />
				</Suspense>
			</div>
		</div>
	)
}

export default MainLayout