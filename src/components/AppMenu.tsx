import { Fragment } from "react";
import { MenuItem, MenuItemWithChildren } from "./AppMenuItem";
import { routes } from "../routes";
type Props = {
	role: string;
}
const AppMenu = ({ role }: Props) => {
	
	return (
		<ul className="metismenu" id="menu-bar">
			{routes.map((item, i) => {
				return (
					<Fragment key={`app-menu-item-${i}`}>
						{item.children ? (
							<MenuItemWithChildren
								item={item}
								subMenuClassNames="nav-second-level"
								activatedMenuItemIds={[]}
								linkClassNames="side-nav-link"
								role={role}
							/>
						) : (
							<MenuItem
								item={item}
								className={''}
								linkClassName="side-nav-link"
							/>
						)}
					</Fragment>
				);
			})}
		</ul>
	);
}

export default AppMenu