import { Link, RouteObject } from "react-router-dom";
import classNames from 'classnames';

type ItemWithChildProps = {
	item: RouteObject;
	linkClassNames: string;
	subMenuClassNames: string;
	activatedMenuItemIds: string[];
};
const MenuItemWithChildren = ({ item, linkClassNames, subMenuClassNames, activatedMenuItemIds }: ItemWithChildProps) => {
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
					{/* <span className=""></span> */}
					{/* <ChevronRight /> */}
				</Link>

				<ul
					className={classNames(subMenuClassNames, {
						'mm-collapse mm-show': item.id && activatedMenuItemIds.indexOf(item.id) >= 0,
					})}
					aria-expanded={item.id ? activatedMenuItemIds.indexOf(item.id) >= 0 : "false"}>
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
				{item.path}
			</span>
        </Link>
    );
};

export { MenuItemWithChildren, MenuItem };
