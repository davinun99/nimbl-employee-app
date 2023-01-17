import { Card, CardBody } from "reactstrap";
import LoaderCmp from "./LoaderCmp";

const LoaderInCard = () => (
	<Card>
		<CardBody className='min-height-100px'>
			<LoaderCmp />
		</CardBody>
	</Card>
);
export default LoaderInCard;
