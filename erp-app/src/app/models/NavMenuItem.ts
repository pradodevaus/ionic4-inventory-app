export interface NavMenuItem {

    title: string;
    url: string;
    icon: string;
    isActive: boolean;
    children: NavMenuItem[];
    color: string;
    expanded?: boolean;
}
