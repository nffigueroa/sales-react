import React from 'react';

export const ItemTDTable = (props) => {
    console.log(props)
    const {td} = props;
    return <div className="item">
                <span>{td}</span>
        </div>
}