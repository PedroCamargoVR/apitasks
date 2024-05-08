import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";
import IUserModel, { UserModel } from "../models/user.model.interface";

export type UserConstructorPros = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: number;
}

@Entity()
export default class UserEntity implements IUserModel{

  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  role: number;

  constructor(id: string, name: string, email: string, password: string, role: number){
    this.id = id ? new ObjectId(id) : new ObjectId();
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  get getId(): ObjectId {
    return this.id;
  }

  get getName(): string {
    return this.name;
  }

  get getEmail(): string {
    return this.email;
  }

  get getPassword(): string {
    return this.password;
  }

  get getRole(): number {
    return this.role;
  }

  toJSON(): UserModel {
    return {
      id: this.id.toString(),
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    };
  }
}
