import { ObjectId } from "mongodb";
import IEntity from "../../../../shared/domain/entities/entity.interface";

export type UserModel = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: number;
}

export default interface IUserModel extends IEntity<UserModel>{
  get getId(): ObjectId,
  get getName(): string,
  get getEmail(): string,
  get getPassword(): string,
  get getRole(): number
}
