
interface UserInputProps {
  name: string;
  email: string;
  password: string;
  role: number;
}

export default class UserInputDTO {
  #name: string;
  #email: string;
  #password: string;
  #role: number;

  constructor(props: UserInputProps){
    this.#name = props.name;
    this.#email = props.email;
    this.#password = props.password;
    this.#role = props.role;
  }

  get getName(): string {
    return this.#name;
  }

  get getEmail(): string {
    return this.#email;
  }

  get getPassword(): string {
    return this.#password;
  }

  get getRole(): number {
    return this.#role;
  }

}
