import { useState } from "react";
import { Form } from "react-router-dom";
import { Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { NimblUser } from "../types";

type Props = {
	toggleModal: () => void;
	isOpen: boolean;
	recruiter: NimblUser;
};

const EditRecruiterModal = ({
	toggleModal, isOpen,
	recruiter,
}: Props) => {
	const [editedRecruiter, setEditedRecruiter] = useState(recruiter);

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setEditedRecruiter({
			...editedRecruiter,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	return (
		<Modal isOpen={isOpen} toggle={toggleModal}>
			<ModalHeader toggle={toggleModal}>Edit recruiter</ModalHeader>
			<Form method='put'>
				<ModalBody>
					<input name="id" value={recruiter.recruiter_id} type="hidden" />
					<Row>
						<Col sm={12} lg={6}>
							<FormGroup>
								<Label for="recruiter_first_name">First name</Label>
								<Input required name="recruiter_first_name" id="recruiter_first_name" onChange={handleChange} value={editedRecruiter.recruiter_first_name} />
							</FormGroup>
						</Col>
						<Col sm={12} lg={6}>
							<FormGroup>
								<Label for="recruiter_last_name">Last name</Label>
								<Input required name="recruiter_last_name" id="recruiter_last_name" onChange={handleChange} value={editedRecruiter.recruiter_last_name} />
							</FormGroup>
						</Col>
						<Col sm={12} lg={6}>
							<FormGroup>
								<Label for="recruiter_email">Email</Label>
								<Input type="email" required name="recruiter_email" id="recruiter_email" onChange={handleChange} value={editedRecruiter.recruiter_email} />
							</FormGroup>
						</Col>
						<Col sm={12} lg={6}>
							<FormGroup>
								<Label for="city">City</Label>
								<Input required name="city" id="city" onChange={handleChange} value={editedRecruiter.city} />
							</FormGroup>
						</Col>
					</Row>
				</ModalBody>
				<ModalFooter>
					<Button type="submit">Save changes</Button>
				</ModalFooter>
			</Form>
		</Modal>
	)
}

export default EditRecruiterModal;
