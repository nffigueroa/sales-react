import React from 'react';

import { RowTableMolecule } from '../molecules/table/rowTable';
import { typeItemTable } from '../../util/const';

import './table.scss';


const TableOrganism = (props) => {
return <>
    <table> 
    <thead>
        <tr>
            {props.label.map((item, index) => {
                return <th key={index}>{item.label}</th>
            })} 
        </tr>
        </thead>
        <tbody>
            {props.data.map((element, index) => {
                return (<tr className="row-table-item" key={index}>
                        {props.label.map((item, index) => {
                            return <td key={index}>{element[item.bd_name]}</td>
                        })}
                    </tr>)
            })}

        </tbody>
    </table>
    
    </>
}

 
export default TableOrganism;