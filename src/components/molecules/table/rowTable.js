import React from 'react';
import './style.scss';
import {ItemTDTable} from '../../atoms/table/item';
import { typeItemTable } from '../../../util/const';


export const RowTableMolecule = (props) => {
    const {trTd} =  props;
    return  <>
    <div className="row-table">
                {props.children}
            </div>
            </>
}