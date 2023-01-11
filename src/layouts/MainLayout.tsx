import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import TopBar from "./Topbar";

const MainLayout = () => {
	return (
		<div className="app">
			<div className="wrapper">
				<TopBar/>
				<LeftSidebar />
				<div className="content-page">
					<div className="content">
						<Container fluid>
							<Outlet/>
						</Container>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default MainLayout