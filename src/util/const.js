export const typeItemTable = {
    update: 'UPDATE',
    delete: 'DELETE',
    text: 'TEXT'
}

export const endPoint = 'http://localhost';
export const  PORT = '3001';

/** Tables Configuration */
export const tableProductConfiguration = [
    {label: 'Codigo', bd_name: 'id_Produccto'},
    {label: 'Producto', bd_name: 'nombre_producto'},
    {label: 'Categoria', bd_name: 'categoria'},
    {label: 'Medicion', bd_name: 'medicion'},
    {label: 'Presentacion', bd_name: 'presentacion'},
    {label: 'Marca', bd_name: 'marca'},
]

export const tableClientConfiguration = [
    {label: 'Codigo', bd_name: 'id_cliente'},
    {label: 'Nombre', bd_name: 'nombre_cliente'},
    {label: 'Apellido', bd_name: 'apellido_cliente'},
    {label: 'Cedula', bd_name: 'cedula_cliente'},
    {label: 'Telefono', bd_name: 'telefono_cliente'},
    {label: 'Direccion', bd_name: 'direccion_cliente'},
    {label: 'Email', bd_name: 'mail_cliente'},
    {label: 'Ciudad', bd_name: 'ciudad'},
    {label: 'Juridico', bd_name: 'EsJuridico'},
    {label: 'Ciudad', bd_name: 'ciudad'},
    {label: 'id_ciudad', bd_name: 'id_ciudad'},
]


/** Dropdown Configurations */

export const dropDowns = {
    categories: {
        returnValue: 'id_categoria',
        displayName: 'categoria'
    },
    marks: {
        returnValue: 'id_marca',
        displayName: 'marca'
    },
    presentations: {
        returnValue: 'id_presentacion',
        displayName: 'presentacion'
    },
    measurements: {
        returnValue: 'id_medicion',
        displayName: 'medicion'
    }
}

/* Form Configuration AddProduct */
const inputTypes = {
    INPUT: 'input',
    DROPDOWN: 'dropdown'
}
export const formConfig = (productValue, 
                            productMarkValue, 
                            productCategoryValue, 
                            productPresentationValue, 
                            productMeasurementValue, 
                            func,
                            productIdValue,
                            productMarkList,
                            productCategoryList,
                            productMeasurementList,
                            productPresentationList) => {
    return {
        funcReturnValue: func,
        values: [
        {
            fieldName: 'id_produccto',
            typeInput: '',
            value: productIdValue,
            key: '',
            defaultValue: '',
            id: 'id_produccto',
            placeholder: ''
        },
        {
            fieldName: 'product_name',
            typeInput: inputTypes.INPUT,
            value: productValue,
            key: '',
            defaultValue: productValue,
            id: 'nombre_producto',
            placeholder: 'Nombre del producto'
        },
        {
            fieldName: 'product_mark',
            typeInput: inputTypes.DROPDOWN,
            value: productMarkValue,
            key: '',
            defaultValue: productMarkValue,     
            id: 'marca',
            placeholder: 'Marca',
            dropdownList: productMarkList,
            dropdownReturnValue: dropDowns.marks.returnValue,
            dropdownConfig: dropDowns.marks
        },
        {
            fieldName: 'product_category',
            typeInput: inputTypes.DROPDOWN,
            value: productCategoryValue,
            key: '',
            defaultValue: productCategoryValue,     
            id: 'categoria',
            placeholder: 'Categoria',
            dropdownList: productCategoryList,
            dropdownReturnValue: dropDowns.categories.returnValue,
            dropdownConfig: dropDowns.categories
        },
        {
            fieldName: 'product_presentation',
            typeInput: inputTypes.DROPDOWN,
            value: productPresentationValue,
            key: '',
            defaultValue: productPresentationValue,     
            id: 'presentacion',
            placeholder: 'Presentación',
            dropdownList: productPresentationList,
            dropdownReturnValue: dropDowns.presentations.returnValue,
            dropdownConfig: dropDowns.presentations
        },
        {
            fieldName: 'product_measurement',
            typeInput: inputTypes.DROPDOWN,
            value: productMeasurementValue,
            key: '',
            defaultValue: productMeasurementValue,     
            id: 'medicion',
            placeholder: 'Medición',
            dropdownList: productMeasurementList,
            dropdownReturnValue: dropDowns.measurements.returnValue,
            dropdownConfig: dropDowns.measurements
        }
    ]}
}