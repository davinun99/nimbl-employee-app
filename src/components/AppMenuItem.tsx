import { Link, RouteObject } from "react-router-dom";
import classNames from 'classnames';
import { Fragment } from "react";
type ItemWithChildProps = {
	item: RouteObject;
	linkClassNames: string;
	subMenuClassNames: string;
	activatedMenuItemIds: string[];
	role: string;
};
const MenuItemWithChildren = ({ item, linkClassNames, subMenuClassNames, activatedMenuItemIds, role }: ItemWithChildProps) => {
    // const Icon = item.icon || null;
    return (
        <li className={classNames('side-nav-item', { 'active mm-active': item.id && activatedMenuItemIds.indexOf(item.id) >= 0 })}>
			<div>
				<Link
					to="/"
					className={classNames('side-sub-nav-link', linkClassNames)}
					aria-expanded={item.id ? activatedMenuItemIds.indexOf(item.id) >= 0 : "false"}
				>
					{/* {item.icon && <Icon />} */}
					<span> {item.path} </span>
					<span className="menu-arrow"></span>
				</Link>

				<ul
					className={classNames(subMenuClassNames, {
						'mm-collapse mm-show': item.id && activatedMenuItemIds.indexOf(item.id) >= 0,
					})}
					aria-expanded={item.id ? activatedMenuItemIds.indexOf(item.id) >= 0 : "false"}>
					{/* {item.children.map((child, i) => {
						return (
							<Fragment key={i}>
								{child.children ? (
									<MenuItemWithChildren
										item={child}
										linkClassNames={classNames({ active: activatedMenuItemIds.indexOf(child.id) >= 0 })}
										activatedMenuItemIds={activatedMenuItemIds}
										subMenuClassNames="side-nav-third-level"
										role={role}
									/>
								) : (
										<MenuItem
											item={child}
											className={classNames({ active: activatedMenuItemIds.indexOf(child.id) >= 0 })}
											linkClassName={classNames({ active: activatedMenuItemIds.indexOf(child.id) >= 0 })}
											role={role}
										/>
									)}
							</Fragment>
						);
					})} */}
				</ul>
			</div>
        </li>
    );
};

type ItemProps = {
	item: RouteObject;
	className: string;
	linkClassName?: string;
};
const MenuItem = ({ item, className, linkClassName }: ItemProps) => {
    return (
        <li className={classNames('side-nav-item', className)}>
            <MenuItemLink item={item} className={linkClassName || ""} />
        </li>
    );
};

const MenuItemLink = ({ item, className}: ItemProps) => { //XXX
    // const Icon = item.icon || null;
    return (
        <Link to={item.path || "/"} className={classNames('side-nav-link-ref', 'side-sub-nav-link', className)}>
            {/* {item.icon && <Icon />} */}
            <span>
				NAME!
			</span>
        </Link>
    );
};

export { MenuItemWithChildren, MenuItem };
