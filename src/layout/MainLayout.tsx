import { Outlet, useLoaderData } from "react-router-dom";
import { Container } from "reactstrap";
import { RootLoader } from "../routes/loaders/rootLoader";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import TopBar from "./Topbar";

const MainLayout = () => {
	const { nimblUser } = useLoaderData() as RootLoader;
	const fullName = `${nimblUser.recruiter_first_name} ${nimblUser.recruiter_last_name}`;

	return (
		<div className="app">
			<div className="wrapper">
				<TopBar profilePic={nimblUser.profile_photo} username={nimblUser.recruiter_first_name} description={nimblUser.recruiter_email} />
				<LeftSidebar name={fullName} description={nimblUser.recruiter_email} profilePic={nimblUser.profile_photo} />
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