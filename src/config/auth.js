import { getToken } from "utils/token";

class Auth {
  authenticated = false;
  constructor() {
    this.authenticated = false;
  }
  isAuthenticated() {
    this.authenticated = !!getToken({ name: "token" });
    return this.authenticated;
  }
}

export default new Auth();
