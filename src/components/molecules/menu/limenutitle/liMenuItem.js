import React from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { CurrentMenuItem } from '../../../../state/actions/other.action';

const LiMenuItem = (props) => {
    const { CURRENTMENU, path } = props
    console.log(props)
    return <>
     <li style={{background: props.currentMenuItem === CURRENTMENU.URL ? 'hsla(0,0%,100%,.13)' : ''}} 
     onClick={() =>{ props.history.push(path); props.CurrentMenuItem(CURRENTMENU.URL)}}>{props.children}<p>{CURRENTMENU.INDEX}</p> </li>
    </>
  }

  const mapStateToProps = state => {
    if (!state.other.menu) return
    return ({currentMenuItem: state.other.menu.currentMenuItem});
  }
  const mapDispatchToProps = dispatch =>
    bindActionCreators({
        CurrentMenuItem
      },
      dispatch
    );
  
  export default connect(mapStateToProps, mapDispatchToProps)(LiMenuItem);