import React from 'react';
import './style.scss';
import {ItemTDTable} from '../../atoms/table/item';
import { typeItemTable } from '../../../util/const';


export const RowTableMolecule = (props) => {
    const {trTd} =  props;
    return  <>
    <div className="row-table">
                {/* {
                    trTd.map((item, index) => {
                        switch (item.type) {
                            case typeItemTable.text:
                                return <ItemTDTable key={index} td={item.value}></ItemTDTable>
                            case typeItemTable.delete:
                                return <i key={index} className="fas fa-trash-alt"></i>
                            case typeItemTable.update:
                                return <i key={index} className="fas fa-pen"></i>
                            default:
                                return <span>No hay nada</span>
                        }
                    })
                } */}
            </div>
            </>
}