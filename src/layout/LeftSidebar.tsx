import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import AppMenu from '../components/AppMenu';
import UserProfileWidget from '../components/UserProfileWidget';

/**
 * Sidenav
 */
const SideNav = () => {
    return <div className="sidebar-content">
        <div id="sidebar-menu">
            <AppMenu />
        </div>
    </div>
}

type Props = {
	profilePic: string;
	name: string;
	description: string;
};
const LeftSidebar = ({name, description, profilePic}: Props) => {
	return (
		<div className='left-side-menu'>
			<UserProfileWidget name={name} description={description} profilePic={profilePic} />
			<PerfectScrollbar>
				<SideNav />
			</PerfectScrollbar>
		</div>
	)
}

export default LeftSidebar;
