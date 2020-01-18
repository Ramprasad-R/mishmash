module.exports = class ShoppingCart {
  constructor() {
    this.currentCart = [];
  }
  getItems = () => this.currentCart;
  addItem = (itemName, quantity, price) => {
    const currentCartItem = {}
    currentCartItem.name = itemName;
    currentCartItem.quantity = quantity;
    currentCartItem.pricePerUnit = price;
    this.currentCart.push(currentCartItem)
  }
  clear = () => this.currentCart = [];
  total = () => this.currentCart.reduce((total, item) => total + (item.pricePerUnit * item.quantity), 0);
}