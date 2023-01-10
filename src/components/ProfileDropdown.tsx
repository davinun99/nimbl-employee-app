import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { ChevronDown } from 'react-feather';
import { Fragment, useState } from 'react';
import { ProfileMenuItem } from '../types';

type Props = {
	profilePic: string;
	menuItems: ProfileMenuItem[];
	username: string;
	description: string;
}
const ProfileDropdown = ({ profilePic , menuItems, username, description }: Props) => {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
	const toggleDropdown = () => setDropdownIsOpen(!dropdownIsOpen);
	return(
		<Dropdown isOpen={dropdownIsOpen} toggle={toggleDropdown} className="notification-list align-self-center profile-dropdown">
			<DropdownToggle
				data-toggle="dropdown"
				tag="a"
				className="nav-link dropdown-toggle nav-user mr-0 mr-0"
				onClick={toggleDropdown} aria-expanded={dropdownIsOpen}>

				<div className="media user-profile ">
					<img src={profilePic} alt={username} className="rounded-circle align-self-center" />
					<div className="media-body text-left">
						<h6 className="pro-user-name ml-2 my-0">
							<span>{username}</span>
							<span className="pro-user-desc text-muted d-block mt-1">{description} </span>
						</h6>
					</div>
					<ChevronDown className="ml-2 align-self-center"></ChevronDown>
				</div>
			</DropdownToggle>
			<DropdownMenu end className="topbar-dropdown-menu profile-dropdown-items">
				<div onClick={toggleDropdown}>
					{menuItems.map((item, i) => {
						const Icon = item.icon;
						return <Fragment key={i + "-profile-menu"}>
							{item.hasDivider ? <DropdownItem divider /> : null}
						<Link to={item.redirectTo} className="dropdown-item notify-item">
								<Icon className="icon-dual icon-xs mr-2"></Icon>
								<span>{item.label}</span>
							</Link>
						</Fragment>
					})}
				</div>
			</DropdownMenu>
		</Dropdown>
	);
}

export default ProfileDropdown;