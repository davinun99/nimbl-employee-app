import { useLocation } from "react-router-dom";
import { Col, Row } from "reactstrap";
import EditProfileForm from "../components/EditProfileForm";
import PageTitle from "../components/PageTitle";
import { NimblUser } from "../types";
import { getNimblUser } from "../utils/localStorage";

const EditProfilePage = () => {
	const location = useLocation();
	const recruiter: NimblUser = location.state?.recruiter || getNimblUser();
	return (
		<>
			<PageTitle title="Edit profile" />
			<Row>
				<Col lg={12}>
					<EditProfileForm recruiter={recruiter} />
				</Col>
			</Row>
		</>	
	);
}

export default EditProfilePage;
