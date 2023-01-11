import { Link, RouteObject } from "react-router-dom";
import classNames from 'classnames';

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

export { MenuItem };
