export interface NavMenuItem {

    title: string;
    url: string;
    icon: string;
    isActive;
    children: NavMenuItem[];
    color: string;
}
