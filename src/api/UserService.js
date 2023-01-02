import axios from "axios";

export default class UserService {
  static async getUsers() {
    return await axios.get('./users.json');
  }
}