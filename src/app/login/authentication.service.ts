import { Injectable } from "@angular/core";
import { User } from "./model/user";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  constructor() {}

  authentUser(login: string, password: string): User {
    return {
      id: 1,
      login: login,
      lastname: "Doe",
      firstname: "John",
    };
  }
}