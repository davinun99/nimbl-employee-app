import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import * as FeatherIcon from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../utils/axios';

type Props = {
	profilePic: string;
	name: string;
	description: string;
};

const UserProfileWidget = ({ 
	// user, role, nimblUser, showRightSidebar
	profilePic, name, description
}: Props) => {
	const navigate = useNavigate();
    const handleLogout = () => {
		localStorage.clear();
		axiosClient.defaults.headers.common.Authorization = '';
		navigate('/login');
	}
    return <>
        <div className="media user-profile my-2 d-flex">
            <img src={profilePic} className="avatar-sm rounded-circle me-2" alt="Avatar" />
            <img src={profilePic} className="avatar-xs rounded-circle me-2" alt="Avatar" />

            <div className="media-body px-2">
                <h6 className="pro-user-name mt-0 mb-0">{name}</h6>
                <span className="pro-user-desc">{description}</span>
            </div>

            <UncontrolledDropdown className="align-self-center profile-dropdown-menu sidebarUncontrolledDropdown" direction='start' inNavbar>
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
					// onClick={handleOpenMenu}
                    className="btn btn-link p-0 dropdown-toggle me-0">
                    <FeatherIcon.ChevronDown />
                </DropdownToggle>
                <DropdownMenu className="topbar-dropdown-menu profile-dropdown-items dropdownMenu">
                    <Link to="/" className="dropdown-item notify-item">
                        <FeatherIcon.User className="icon-dual icon-xs me-2" />
                        <span>My Account</span>
                    </Link>
                    <Link to="/" className="dropdown-item notify-item">
                        <FeatherIcon.HelpCircle className="icon-dual icon-xs me-2" />
                        <span>Support</span>
                    </Link>
                    <DropdownItem divider />
                    <span onClick={handleLogout} className="dropdown-item notify-item">
                        <FeatherIcon.LogOut className="icon-dual icon-xs me-2" />
                        <span>Logout</span>
                    </span>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    </>
}

export default UserProfileWidget;