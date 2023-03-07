// 全局store放这里

import { makeAutoObservable } from "mobx";

class Common {
  userInfo = null;

  constructor() {
    makeAutoObservable(this);
  }

}

export default new Common();
