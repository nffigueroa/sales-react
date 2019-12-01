import React from 'react';

import { RowTableMolecule } from '../molecules/table/rowTable';
import { typeItemTable } from '../../util/const';

import './table.scss';
import OptionsOrganism from './options';


const TableOrganism = (props) => {
return <div className="table">
    <table> 
    <thead>
        <tr>
            {props.label.map((item, index) => {
                return <th key={index}>{item.label}</th>
            })}
            {
                props.options ?
                <th>Opciones</th>:
                null
            } 
        </tr>
        </thead>
        <tbody>
            {props.data.map((element, index) => {
                return (<tr className="row-table-item" key={index}>
                        {props.label.map((item, index) => {
                            return <td key={index}>{element[item.bd_name]}</td>
                        })
                        }
                            { 
                            props.options ?
                            <OptionsOrganism itemDisplayed={props.data[index]} config={props.options}></OptionsOrganism>:
                            null
                            }
                    </tr>)
                                                }
                    )
            } 
        </tbody>
    </table>
    
    </div>
}

 
export default TableOrganism;