export interface IUser {
    mail: string, 
    password: string,
    token: string
}

export interface IProduction {
    product_id: Number, 
    model_id: Number,
    model: String 
    serial: String, 
    checkpoint_id: Number,
    line: String, 
    time: String,
    email: string | null
    role: string | null
    toker: string | null
}

export interface IRemontTypes {
    id: number, 
    defect_name: string,
    line_id: number, 
    name: string
}

export interface ILines {
    id: number, 
    name: string,
}

export interface IRemont {
    id: number
    serial: string
    vaqt: string | Date
    checkpoint: string
    model: string
    defect: string
    error?: any
}