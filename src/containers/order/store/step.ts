import { makeAutoObservable } from "mobx";

class Step {
  current = 0;
  isClearForm = false;
  
  constructor() {
    makeAutoObservable(this);
  }

  setCurrent(value: number) {
    this.current = value;
  }

  setIsClearForm(status: boolean) {
    this.isClearForm = status;
  }
  
}

export default new Step();