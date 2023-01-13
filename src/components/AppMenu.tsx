import { Fragment } from "react";
import { SidebarNavItem } from "../types";
import { MenuItem } from "./AppMenuItem";
import * as Feather from "react-feather";
type Props = {}
const routes: SidebarNavItem[] = [
	{
		path: '/',
		name: 'Home',
		icon: Feather.Home,
	},
	{
		path: '/profile',
		name: 'Profile',
		icon: Feather.User,
	},
	{
		path: '/expenses',
		name: 'Expenses',
		icon: Feather.DollarSign,
	}
];
const AppMenu = ({}: Props) => {
	return (
		<ul className="metismenu" id="menu-bar">
			{routes.map((item, i) => {
				return (
					<Fragment key={`app-menu-item-${i}`}>
						<MenuItem
							item={item}
							className={''}
							linkClassName="side-nav-link"
						/>
					</Fragment>
				);
			})}
		</ul>
	);
}

export default AppMenu