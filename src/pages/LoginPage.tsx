import { Container, Row, Col, Card, CardBody, Collapse } from 'reactstrap';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import logo from '../assets/nimblLogo.png';
import { ADMIN_EMAIL } from '../utils/constants';

const LoginPage = () => {
	
	const handleGoogleResponse = (googleResponse: GoogleLoginResponse | GoogleLoginResponseOffline) => {
		try {
			googleResponse = googleResponse as GoogleLoginResponse;
			if(!googleResponse?.code && googleResponse?.accessToken){
				// this.props.googleLoginUser(googleResponse);
			}
		} catch (error) {
			
		}
	}
	return (
		<div className="account-pages my-5">
			<Container>
				<Row className="justify-content-center">
					<Col md={7} lg={6}>
						<Card className="">
							<CardBody className="p-0">
								<Row className='d-flex justify-content-center'>
									<div className="p-5">
										{ /* preloader */}
										{/* {this.props.loading && <Loader />} */}
										<Row>
											<Col xs={12} className="d-flex justify-content-center">
												<a href="/">
													<img src={logo} alt="" height="36" />
													<h4 className="d-inline align-middle ml-1 text-logo"> employee portal</h4>
												</a>
											</Col>
											<Col xs={12} className="d-flex justify-content-center">
												<h6 className="h5 mb-0 mt-4">Welcome back!</h6>
											</Col>
										</Row>
										
										{/* <p className="text-muted mt-1 mb-4">Please Log in with your nimbl mail.</p> */}
										<Row>
											<Col xs={12}>
												{/* {this.props.error && <Alert color="danger" isOpen={this.props.error ? true : false}>
													<div>{this.props.error}</div>
												</Alert>} */}
											</Col>
										</Row>
										<Row className='my-3 justify-content-center'>
											<Col sm={12} md={10} className="d-flex justify-content-center">
												<GoogleLogin
													clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
													buttonText="Login with google"
													onSuccess={handleGoogleResponse}
													onFailure={handleGoogleResponse}
													cookiePolicy='single_host_origin'
													redirectUri={import.meta.env.VITE_GOOGLE_REDIRECT_URI}
													className="mb-3 mb-md-0"
												/>
											</Col>
										</Row>
									</div>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>						
				<Row className="mt-3">
					<Col className="col-12 text-center">
						<p className="text-muted">Trouble login in? Please contact  {ADMIN_EMAIL}</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default LoginPage;
