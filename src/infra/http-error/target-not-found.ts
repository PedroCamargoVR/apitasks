export class TargetNotFound extends Error{
  constructor(message: string){
    super(message);
    this.name = "TargetNotFound";
    Object.setPrototypeOf(this, TargetNotFound.prototype);
  }
};
