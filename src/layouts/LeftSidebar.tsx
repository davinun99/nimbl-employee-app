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
            <AppMenu role="Nimbl.ai"/>
        </div>
    </div>
}


const LeftSidebar = () => {
	return (
		<div className='left-side-menu'>
			<UserProfileWidget />
			<PerfectScrollbar>
				<SideNav />
			</PerfectScrollbar>
		</div>
	)
}

export default LeftSidebar;
