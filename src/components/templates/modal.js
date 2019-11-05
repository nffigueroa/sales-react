import React from 'react';
import './modal.scss';

const ModalTemplate = (props) => {
    return (
        <div className="modal" style={{height: '100vh'}}>
            <section className="container" >
            <div className="container__close" onClick={() => props.close(false)} ><i className="far fa-times-circle"></i></div>
                {props.children}
            </section>
        </div>
    )
}

export default ModalTemplate;