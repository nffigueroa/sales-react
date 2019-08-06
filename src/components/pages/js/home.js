import React from 'react';
import '../styles/home.scss';
import MenuOrganism from '../../organism/sideBarMenu';
import HomeTemplate from '../../templates/home';
import UserAndPassWordMolecule from '../../molecules/userAndPassword/userAndPaassword';

class HomePage extends React.Component {
    state = {  }
    render() { 
        return <>
           <HomeTemplate >
               <UserAndPassWordMolecule></UserAndPassWordMolecule>
           </HomeTemplate>
        </>;
    }
}
 
export default HomePage;