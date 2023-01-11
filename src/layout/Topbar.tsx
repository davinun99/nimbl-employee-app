import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Menu, X, Settings, User, HelpCircle, Lock, LogOut } from 'react-feather';


import logo from '../assets/nimblLogo.png';
import ProfileDropdown from "../components/ProfileDropdown";
import { ProfileMenuItem } from "../types";


const ProfileMenus: ProfileMenuItem[] = [
	{
		label: 'My Account',
		icon: User,
		redirectTo: "/",
	},
	{
		label: 'Settings',
		icon: Settings,
		redirectTo: "/"
	},
	{
		label: 'Support',
		icon: HelpCircle,
		redirectTo: "/"
	},
	{
		label: 'Lock Screen',
		icon: Lock,
		redirectTo: "/"
	},
	{
		label: 'Logout',
		icon: LogOut,
		redirectTo: "/account/logout",
		hasDivider: true
	}
];

type Props = {
	profilePic: string;
	username: string;
	description: string;
};
const TopBar = ({profilePic, username, description}: Props) => (
	<div className="navbar navbar-expand flex-column flex-md-row navbar-custom">
		<Container fluid>
			{ /* logo */}
			<Link to="/" className="navbar-brand me-0 me-md-2 logo">
				<span className="logo-lg">
					<img src={logo} alt="" height="36" />
				</span>
				<span className="logo-sm">
					<img src={logo} alt="" height="24" />
				</span>
			</Link>

			{ /* menu*/}
			<ul className="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0">
				<li className="">
					<button className="button-menu-mobile open-left disable-btn" onClick={() => {}}>
						<Menu className="menu-icon" />
						<X className="close-icon" />
					</button>
				</li>
			</ul>


			<ul className="navbar-nav flex-row ms-auto d-flex list-unstyled topnav-menu float-right mb-0">
				<li className="d-none d-sm-block">
					<div className="app-search">
						<form>
							{/* <div className="input-group">
								<input type="text" className="form-control" placeholder="Search..." />
								<Search />
							</div> */}
						</form>
					</div>
				</li>
				<ProfileDropdown profilePic={profilePic} menuItems={ProfileMenus} username={username} description={description} />
			</ul>
		</Container>
	</div>
);
export default TopBar;
