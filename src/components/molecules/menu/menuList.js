import React, {useState} from 'react';
import './style.scss';
const MenuMolecule = () => {
    const [showMenu, setShowMenu] = useState(true);
    return <>
        <div className={!showMenu ? 'toggle show-toggle' : 'toggle hide-toggle'}>
                <i className="fas fa-angle-right" onClick={() => setShowMenu(!showMenu)}></i>
        </div>
        <div className={showMenu ? 'menu' : 'menu hide'}>
            <div className="menu__arrow">
                <i className="fas fa-angle-left menu__arrow--active" onClick={() => setShowMenu(!showMenu)}></i>
            </div>
            <ul>
                <li><i className="fas fa-flask"></i></li>
                <li><i className="fas fa-users"></i></li>
                <li><i className="fas fa-book"></i></li>
            </ul>
        </div>
    </>;
}
 
export default MenuMolecule;