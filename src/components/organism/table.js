import React from 'react';

import { RowTableMolecule } from '../molecules/table/rowTable';
import { typeItemTable } from '../../util/const';

// export const mockTable = [
//     {
//         value: 'Gaseosa',
//         type: typeItemTable.text
//     },
//     {
//         value: 'Bebidas',
//         type: typeItemTable.text
//     },
//     {
//         value: 'Eliminar',
//         type: typeItemTable.delete
//     },
//     {
//         value: 'Actualizar',
//         type: typeItemTable.update
//     }
// ]

const TableOrganism = (props) => {
    return <RowTableMolecule trTd={props.data}></RowTableMolecule>;
}
 
export default TableOrganism;