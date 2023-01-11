import { RefreshCcw } from "react-feather";
import { Button, Col, Row } from "reactstrap";

type Props = {
	handleRefresh: () => void;
	title: string;
};
const PageTitle = ({ handleRefresh, title}: Props) => {
	return (
		<Row className="page-title align-items-center">
			<Col xs={12} className="d-flex justify-content-between align-items-center">
				<h4 className="mb-1 mt-0">{title}</h4>
				<Button onClick={handleRefresh}>
					<RefreshCcw size={15}/>
				</Button>
			</Col>
		</Row>
	)
}

export default PageTitle;
