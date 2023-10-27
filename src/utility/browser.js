export class BrowserUtility {
    static get = (key) => {
      const data = window.localStorage.getItem(key);
      return data;
    };
  
    static getObj = (key) => {
      const data = BrowserUtility.get(key);
      if (data) {
        return JSON.parse(data);
      }
      return null;
    };
  
    static save = (key, value) => {
      window.localStorage.setItem(key, value);
    };
  
    static saveObj = (key, value) => {
      const str = JSON.stringify(value);
      BrowserUtility.save(key, str);
    };
  
    static remove = (key) => {
      window.localStorage.removeItem(key);
    };
  
    static clear = () => {
      window.localStorage.clear();
    };
  
    static saveInSession = (key, value) => {
      window.sessionStorage.setItem(key, value);
    };
  
    static getFromSession = (key) => {
      const data = window.sessionStorage.getItem(key);
      return data;
    };
  }
  