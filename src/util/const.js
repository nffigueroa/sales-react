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