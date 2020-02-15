import React from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { CurrentMenu } from '../../../../state/actions/other.action';
import {MdExpandMore} from 'react-icons/md'

export const LiMenuTitle = (props) => {
    const { CURRENTMENU } = props
    return <>
      <li  onClick={() => props.CurrentMenu(CURRENTMENU)} style={{background: props.currentMenu === CURRENTMENU ? 'hsla(0,0%,100%,.13)' : ''} } 
        className="container-item"> {props.children}<h6>{CURRENTMENU}</h6> 
        <images className="container-item__arrow"> <MdExpandMore /> </images>
      </li>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(LiMenuTitle);