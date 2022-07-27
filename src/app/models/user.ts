import { Address } from "./address";

export class User{
    id: number = 0;
    name: String = "";
    username: String = "";
    email: String = "";
    address: Address = new Address();
}