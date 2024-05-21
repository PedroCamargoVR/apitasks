import { ObjectId } from "mongodb";
import UserEntity from "../entities/user.entity";
import IUserModel from "../models/user.model.interface";
import { QueryResultDTO } from "../../infra/dto/query-result.dto";

export interface IUserRepository{
    getAllUsers(): Promise<IUserModel[]>;
    getUserById(id: ObjectId): Promise<IUserModel | null>;
    getUserByEmail(email: string): Promise<IUserModel | null>;
    saveUser(user: IUserModel): Promise<IUserModel>;
    deleteUser(id: ObjectId): Promise<QueryResultDTO>;
}
