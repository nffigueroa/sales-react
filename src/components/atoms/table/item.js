import React from 'react';

export const ItemTDTable = (props) => {
    const {td} = props;
    return <div className="item">
                <span>{td}</span>
        </div>
}