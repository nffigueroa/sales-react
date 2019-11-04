import React, {useState} from 'react';
import './style.scss';
const MenuMolecule = (props) => {
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
                <li onClick={() => props.history.push('/home/product')}><i className="fas fa-clipboard"></i><p>Productos</p></li>
                <li onClick={() => props.history.push('/home/client')}><i className="fas fa-users"></i></li>
                <li><i class="fas fa-address-book"></i></li>
            </ul>
        </div>
    </>;
}
 
export default MenuMolecule;