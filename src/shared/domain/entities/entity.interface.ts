import { ObjectId } from "typeorm";

export default interface IEntity<PROPS>{
  get id(): ObjectId;
  toJSON(): PROPS;
}
