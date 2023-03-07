import { makeAutoObservable } from "mobx";

class Transportation {
  cardName = 'transportation';

  constructor() {
    makeAutoObservable(this);
  }
  
}

export default new Transportation();