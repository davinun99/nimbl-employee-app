import { RefreshCcw } from "react-feather";
import { Button, Col, Row } from "reactstrap";

const RootPage = () => {
	const handleRefresh = () => {}
	return (
		<Row className="page-title align-items-center">
			<Col xs={12} className="d-flex justify-content-between align-items-center">
				<h4 className="mb-1 mt-0">Welcome!</h4>
				<Button onClick={handleRefresh}>
				<RefreshCcw size={15}/>
			</Button>
			</Col>
		</Row>
		
	)
}

export default RootPage;
