import { Card, CardBody, Row, Col } from 'reactstrap';
import { NimblUser } from '../types';

const profileImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqb1cpENzAUc1SnTZkgZ_cQm6IlatQBlmYjQ&usqp=CAU';
type Props = {
	nimblUser: NimblUser;
}
const UserBox = ({ nimblUser }: Props) => {
	const fullName = `${nimblUser.recruiter_first_name} ${nimblUser.recruiter_last_name}`;
    return (
        <Card className="">
            <CardBody className="profile-user-box">
                <Row>
                    <Col>
                        <div className="text-center mt-3">
                            <img src={nimblUser.profile_photo || profileImg} alt=""
                                className="avatar-lg rounded-circle" />
                            <h5 className="mt-2 mb-0">{fullName}</h5>
                            <h6 className="text-muted font-weight-normal mt-2 mb-0">Nimbl.ai</h6>
                            <h6 className="text-muted font-weight-normal mt-1 mb-4">{nimblUser.city}</h6>
                            <button type="button" className="btn btn-primary btn-sm me-1">Edit</button>
                        </div>
                        <div className="mt-3 pt-2 border-top">
                            <h4 className="mb-3 font-size-15">Contact Information</h4>
                            <div className="table-responsive">
                                <table className="table table-borderless mb-0 text-muted">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>{nimblUser.recruiter_email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default UserBox;
