import { IUser } from "../../models/Usermodel"

export interface IUserAllResponse {
    payloads: IUser[]
    count: number
}

export interface SampleRepo {
    create(payload: IUser): Promise<IUser>
    update(id: string, payload: IUser): Promise<IUser>
    delete(id: string): Promise<any>
    find(query: Object): Promise<IUser[]>
    findOne(query: Object): Promise<IUser>
    findById(id: string): Promise<IUser>
}
