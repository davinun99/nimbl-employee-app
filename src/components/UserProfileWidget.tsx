import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import * as FeatherIcon from 'react-feather';
import { Link } from 'react-router-dom';

const UserProfileWidget = ({ 
	// user, role, nimblUser, showRightSidebar
}) => {
    
    const profilePic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLweB8yzejCatN8TyaacHUKbIqFtsNdp-wrg&usqp=CAU';
    return <>
        <div className="media user-profile my-2 d-flex">
            <img src={profilePic} className="avatar-sm rounded-circle mr-2" alt="Avatar" />
            <img src={profilePic} className="avatar-xs rounded-circle mr-2" alt="Avatar" />

            <div className="media-body px-2">
                <h6 className="pro-user-name mt-0 mb-0">David Nuñez</h6>
                <span className="pro-user-desc">Nimbl.ai</span>
            </div>

            <UncontrolledDropdown className="align-self-center profile-dropdown-menu sidebarUncontrolledDropdown" direction='start' inNavbar>
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
					// onClick={handleOpenMenu}
                    className="btn btn-link p-0 dropdown-toggle mr-0">
                    <FeatherIcon.ChevronDown />
                </DropdownToggle>
                <DropdownMenu className="topbar-dropdown-menu profile-dropdown-items dropdownMenu">
                    <Link to="/" className="dropdown-item notify-item">
                        <FeatherIcon.User className="icon-dual icon-xs mr-2" />
                        <span>My Account</span>
                    </Link>
                    <Link to="/" className="dropdown-item notify-item">
                        <FeatherIcon.HelpCircle className="icon-dual icon-xs mr-2" />
                        <span>Support</span>
                    </Link>
                    <DropdownItem divider />
                    <Link to="/account/logout" className="dropdown-item notify-item">
                        <FeatherIcon.LogOut className="icon-dual icon-xs mr-2" />
                        <span>Logout</span>
                    </Link>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    </>
}

export default UserProfileWidget;