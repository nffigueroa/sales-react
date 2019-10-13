import React from 'react';
import '../styles/home.scss';
import BaseTemplate from '../../templates/base';
import TableOrganism from '../../organism/table';

class HomePage extends React.Component {
    state = {  }
    render() { 
        return <>
           <BaseTemplate history={this.props.history} >
            
           </BaseTemplate>
        </>;
    }
}
 
export default HomePage;