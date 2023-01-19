import { useState } from "react";
import { useFetcher } from "react-router-dom";
import { Button, Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { NimblUser } from "../types";
import LoaderCmp from "./LoaderCmp";

type Props = {
	recruiter: NimblUser;
};

const EditProfileForm = ({
	recruiter
}: Props) => {
	const [editedRecruiter, setEditedRecruiter] = useState(recruiter);
	const fetcher = useFetcher();
	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setEditedRecruiter({
			...editedRecruiter,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};
	return (
		<Card>
			<CardBody>
				{fetcher.state !== 'idle' && <LoaderCmp />}
				<fetcher.Form method='put'>
					<input name="id" value={recruiter.recruiter_id} type="hidden" />
					<Row>
						<Col sm={12} lg={4}>
							<FormGroup>
								<Label for="recruiter_first_name">First name</Label>
								<Input required name="recruiter_first_name" id="recruiter_first_name" onChange={handleChange} value={editedRecruiter.recruiter_first_name} />
							</FormGroup>
						</Col>
						<Col sm={12} lg={4}>
							<FormGroup>
								<Label for="recruiter_last_name">Last name</Label>
								<Input required name="recruiter_last_name" id="recruiter_last_name" onChange={handleChange} value={editedRecruiter.recruiter_last_name} />
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col sm={12} lg={4}>
							<FormGroup>
								<Label for="recruiter_email">Email</Label>
								<Input type="email" required name="recruiter_email" id="recruiter_email" onChange={handleChange} value={editedRecruiter.recruiter_email} />
							</FormGroup>
						</Col>
						<Col sm={12} lg={4}>
							<FormGroup>
								<Label for="city">City</Label>
								<Input required name="city" id="city" onChange={handleChange} value={editedRecruiter.city} />
							</FormGroup>
						</Col>
					</Row>
					<Button type="submit">Save changes</Button>
				</fetcher.Form>
			</CardBody>
		</Card>
	)
}

export default EditProfileForm;
