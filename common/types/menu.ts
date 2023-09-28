import { ReactNode } from "react";
export type MenuItemsProps = {
    name: string;
    path: string;
    icon?: JSX.Element;
    eventName?: string;
    children?: ReactNode;
}