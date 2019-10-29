import React from 'react';

import { RowTableMolecule } from '../molecules/table/rowTable';
import { typeItemTable } from '../../util/const';

import './table.scss';


const TableOrganism = (props) => {
return <>
    <table> 
    <thead>
        <tr>
            {props.label.map((item) => {
                return <th>{item.label}</th>
            })} 
        </tr>
        </thead>
        <tbody>
            {props.data[0].map((element, index) => {
                return (<tr className="row-table-item">
                        {Object.keys(element).map((item, index) => {
                            return <td>{element[Object.keys(element)[index]]}</td>
                        })}
                    </tr>)
            })}

        </tbody>
    </table>
    
    </>
}

 
export default TableOrganism;