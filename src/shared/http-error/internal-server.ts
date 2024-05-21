export class InternalServer extends Error{
  constructor(message: string){
    super(message);
    this.name = "InternalServer";
    Object.setPrototypeOf(this, InternalServer.prototype);
  }
};
