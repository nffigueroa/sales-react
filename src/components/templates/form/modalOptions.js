import React from 'react';
import './modalOptions.scss';

const ModalOptions = (props) => {
    const {body, title, options} = props;
    return  <div className="delete-modal">
                <span className="delete-modal__title">{title}</span>
                <span className="delete-modal__body">{body}</span>
                <div className="options">
                    {
                        options.map((item) => {
                            return (<button onClick={() => props.optionSelected(item.value)} className="options__button">{item.label}</button>)
                        })
                    }
                </div>
            </div>
}

export default ModalOptions;