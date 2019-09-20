import React from 'react';
import './style.scss';
import {ItemTDTable} from '../../atoms/table/item';
import { typeItemTable } from '../../../util/const';


export const RowTableMolecule = (props) => {
    const {trTd} =  props;
    return  <>
    <div className="row-table">
                {
                    trTd.map((item) => {
                        switch (item.type) {
                            case typeItemTable.text:
                                return <ItemTDTable td={item.value}></ItemTDTable>
                            case typeItemTable.delete:
                                return <i class="fas fa-trash-alt"></i>
                            case typeItemTable.update:
                                return <i class="fas fa-pen"></i>
                            default:
                                return <span>No hay nada</span>
                        }
                    })
                }
            </div>
            </>
}