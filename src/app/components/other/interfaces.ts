export interface Usuario
{
    ID: Number,
    Nombre: String,
    Apellidos: string,
    Nick: string,
    Email: string,
    Contraseña: string,
    Tipo: UserType
}

export enum UserType 
{
    Administrador,
    Cliente,
    Tecnico
}