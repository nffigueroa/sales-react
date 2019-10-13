import React from 'react';
import './base.scss';
import SidebarOrganism from '../organism/sideBarMenu';
import ContainerTemplate from './container';

const BaseTemplate = (props) => {
    return <>
        <div className="home-template">
        <section className="header-app">

        </section>

        <section className="sidebar-menu">
            <SidebarOrganism history={props.history} />
        </section>

        <section className="container-components">
            <ContainerTemplate>
                {props.children}
            </ContainerTemplate>
        </section>
        </div>
    </>;
}
 
export default BaseTemplate;