import { makeAutoObservable } from "mobx";

class Order {
  isModalOpen = false;
  isCardModalOpen = false;
  cardName = 'order';

  constructor() {
    makeAutoObservable(this);
  }

  setIsModalOpen(status: boolean) {
    this.isModalOpen = status;
  }
  setIsCardModalOpen(status: boolean) {
    this.isCardModalOpen = status;
  }
  
}

export default new Order();