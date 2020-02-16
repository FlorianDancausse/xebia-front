import { CartItemInterface } from '../interfaces/cart-item-interface';

export class CartItem {
    public isbn: string;
    public quantity: number;

    constructor(cartItem: CartItemInterface) {
        this.isbn = cartItem.isbn;
        this.quantity = cartItem.quantity;
    }
}
