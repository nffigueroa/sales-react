import React, { Component } from 'react';
import MenuMolecule from '../molecules/menu/menuList';

const  SidebarOrganism = (props) => {
    return <>
        <MenuMolecule history={props.history} />
    </>;
}
 
export default SidebarOrganism;