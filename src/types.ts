import { ElementType } from "react";

export type ProfileMenuItem = {
	label: string;
	icon: ElementType;
	redirectTo: string;
	hasDivider?: boolean;
};