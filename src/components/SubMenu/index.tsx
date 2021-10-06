import React, { useState } from 'react';
import { SidebarLink, SidebarLabel, DropdownLink } from './styles';


interface ISubNavProps {
    title: string;
    path: string;
    icon: object;
}

interface IItemPropros {
        title: string;
        path: string;
        icon: object;
        iconClosed: object;
        iconOpened: object;
        subNav: ISubNavProps[];
}

const SubMenu = ({item}:any) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to ={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item:any,index:number)=>{
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SubMenu;