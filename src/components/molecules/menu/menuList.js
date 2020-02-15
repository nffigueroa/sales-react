import React, { useState } from 'react'
import MaterialIcon from '@material/react-material-icon'

import {IoMdListBox, IoIosPerson, IoIosBriefcase, IoIosPaper, IoIosPricetags, IoIosInformationCircle} from 'react-icons/io';
import {FaBalanceScale, FaProductHunt, FaCashRegister, FaDollarSign} from 'react-icons/fa'

import './style.scss'
import { MENU } from '../../../util/menu.const';
import { connect } from 'react-redux';
import { CurrentMenu, CURRENT_MENU } from '../../../state/actions/other.action';
import { bindActionCreators } from 'redux';
import LiMenuTitle from './limenutitle/liMenuTitle';
import LiMenuItem from './limenutitle/liMenuItem';

const MenuMolecule = (props) => {
  const [showMenu, setShowMenu] = useState(true)
  const [indiceMenu, setIndiceMenu] = useState(false);
  const [procesoMenu, setProcesoMenu] = useState(false);
  const [cartera, setCarteraMenu] = useState(false);
  const [reportes, setReportes] = useState(false);
  return <>
    <div className={!showMenu ? 'toggle show-toggle' : 'toggle hide-toggle'}>
      <i className='fas fa-angle-right' onClick={() => setShowMenu(!showMenu)} />
    </div>
    <div className={showMenu ? 'menu' : 'menu hide'}>
      <div className='menu__bg' />
      <div className='menu__arrow'>
        <i className='fas fa-angle-left menu__arrow--active' onClick={() => setShowMenu(!showMenu)} />
      </div>
      <section className='menu__logo' />
      <section className='menu__user'>
        <div className='icon'>
          <span />
        </div>
      </section>
      <ul>

        <LiMenuTitle CURRENTMENU={MENU.INDICE.INDEX}> <IoMdListBox size="1.5em"/> </LiMenuTitle>
        
        <ul  className={props.currentMenu === MENU.INDICE.INDEX ? 'sub-list--opened' : 'sub-list'}> 
            <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.INDICE.PRODUCTO} >
              <FaProductHunt icon='assignment' className='icon' />
            </LiMenuItem>
            <LiMenuItem history={props.history} path={'/home/client'} CURRENTMENU={MENU.INDICE.CLIENTE} >
              <IoIosPerson icon='assignment' className='icon' />
            </LiMenuItem>
            <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.INDICE.PROVEEDOR} >
              <IoIosBriefcase icon='assignment' className='icon' />
            </LiMenuItem>
            <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.INDICE.CATEGORIAS} >
              <IoIosPaper icon='assignment' className='icon' />
            </LiMenuItem>
            <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.INDICE.MARCAS} >
              <IoIosPricetags icon='assignment' className='icon' />
            </LiMenuItem>
            <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.INDICE.MEDICION} >
              <FaBalanceScale icon='assignment' className='icon' />
            </LiMenuItem>
            <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.INDICE.USUARIO} >
              <MaterialIcon icon='assignment' className='icon' />
            </LiMenuItem>
        </ul>

        <LiMenuTitle CURRENTMENU={MENU.PROCESOS.INDEX}> <FaCashRegister size="1.5em" /> </LiMenuTitle>

        <ul  className={props.currentMenu === MENU.PROCESOS.INDEX ? 'sub-list--opened' : 'sub-list'}> 
            <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.PROCESOS.ENTRADAINVENTARIO} >
              <FaProductHunt icon='assignment' className='icon' />
            </LiMenuItem>
            <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.PROCESOS.REIMPRIMIRFACTURAS} >
              <IoIosPerson icon='assignment' className='icon' />
            </LiMenuItem>
            <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.PROCESOS.CAJONDINERO} >
              <IoIosBriefcase icon='assignment' className='icon' />
            </LiMenuItem>
            <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.PROCESOS.CORTECAJA} >
              <IoIosPaper icon='assignment' className='icon' />
            </LiMenuItem>
        </ul>

        <LiMenuTitle CURRENTMENU={MENU.CARTERA.INDEX}> <FaDollarSign size="1.5em"/>  </LiMenuTitle>

        <ul  className={props.currentMenu === MENU.CARTERA.INDEX ? 'sub-list--opened' : 'sub-list'}> 
            <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.CARTERA.CUENTASPORCOBRAR} >
              <FaProductHunt icon='assignment' className='icon' />
            </LiMenuItem>
            <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.CARTERA.CUENTASPORPAGAR} >
              <IoIosPerson icon='assignment' className='icon' />
            </LiMenuItem>
        </ul>
        
        <LiMenuTitle CURRENTMENU={MENU.REPORTES.INDEX}><IoIosInformationCircle size="1.5em" /> </LiMenuTitle>

        <ul  className={props.currentMenu === MENU.REPORTES.INDEX ? 'sub-list--opened' : 'sub-list'}> 
          <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.REPORTES.REPORTEINVENTARIO} >
            <FaProductHunt icon='assignment' className='icon' />
          </LiMenuItem>
          <LiMenuItem history={props.history} path={'/home/product'} CURRENTMENU={MENU.REPORTES.REPORTECONTABLE} >
            <FaProductHunt icon='assignment' className='icon' />
          </LiMenuItem>
        </ul>
      </ul>
    </div>
  </>
}

const mapStateToProps = state => {
  if (!state.other.menu) return
  return ({currentMenu: state.other.menu.currentMenu});
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({
      CurrentMenu
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MenuMolecule);
