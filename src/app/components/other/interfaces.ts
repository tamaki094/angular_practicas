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


export interface LoginResponse
{
    success: boolean
    user: User 
    token: string
}

export interface User
{
    name: string
    avatar: string 
    level: number
    points: number
    achievements: any[]
    _id: string
    type: string
    user: string 
    email: string 
    password: number
}