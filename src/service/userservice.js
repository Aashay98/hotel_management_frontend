import { BrowserUtility } from "../utility/browser";

const StorageConstant = {
    user: 'user',
    token: 'token',
};

export class UserService {
  static getLocally(){
    return BrowserUtility.getObj(StorageConstant.user);
  }

  static saveUser(user) {
    BrowserUtility.saveObj(StorageConstant.user, user);
  }

  static saveToken(token) {
    BrowserUtility.save(StorageConstant.token, token);
  }

  static isLoggedIn() {
    return !!UserService.getToken();
  }

  static getToken() {
    return BrowserUtility.get(StorageConstant.token) || "";
  }

  static logout = () => {
    BrowserUtility.clear();
  };
}
