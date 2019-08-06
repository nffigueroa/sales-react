import React from 'react';
import './home.scss';
import SidebarOrganism from '../organism/sideBarMenu';

const HomeTemplate = (props) => {
    return <>
        <div className="home-template">
        <section className="header-app">

        </section>
        <section className="sidebar-menu">
            <SidebarOrganism />
        </section>
        <section className="container-components">
            {props.children}
        </section>
        </div>
    </>;
}
 
export default HomeTemplate;