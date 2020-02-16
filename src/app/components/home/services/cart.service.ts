/** angular */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
/** end angular */

/** interfaces */
import { BookInterface } from '../interfaces/book.interface';
import { CartItemInterface } from '../interfaces/cart-item-interface';
/** end interfaces */

/** constants */
import { defaultCart } from '../constants/cart';
/** end constants */

@Injectable()
export class CartService {
  /**
   * The current cart
   */
  private _cart: CartItemInterface[];
  public get cart(): CartItemInterface[] {
    return this._cart;
  }
  public set cart(cart: CartItemInterface[]) {
    this._cart = cart;
  }

  /**
   * The amount of selected books
   */
  private selectedBooksAmountSubject: BehaviorSubject<number>;
  public selectedBooksAmountObservable: Observable<number>;
  public get selectedBooksAmount(): number {
    return this.selectedBooksAmountSubject.value;
  }
  public set selectedBooksAmount(value: number) {
    this.selectedBooksAmountSubject.next(value);
  }


  constructor() {
    this.cart = this.getCartFromLocalStorage();
    this.selectedBooksAmountSubject = new BehaviorSubject<number>(this.getSelectedBooksAmountFromCart(this.cart));
    this.selectedBooksAmountObservable = this.selectedBooksAmountSubject.asObservable();
  }

  /**
   * Get the cart list from localstorage
   */
  private getCartFromLocalStorage(): CartItemInterface[] {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : defaultCart;
  }

  /**
   * Set the cart list to localstorage
   */
  public setCartToLocalStorage(cart: CartItemInterface[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  /**
   * Get the selected books amount from cart
   */
  public getSelectedBooksAmountFromCart(cart: CartItemInterface[]): number {
    let amount = 0;
    cart.forEach(item => {
      amount += item.quantity;
    });
    return amount;
  }

  /**
   * Add book to the cart list, or increase its quantity
   */
  public addBook(book: BookInterface): void {
    const bookIndex: number = this.cart.findIndex(((item, index) => item.isbn === book.isbn));

    if (bookIndex > -1) {
      this.cart[bookIndex].quantity += 1;
    } else {
      this.cart.push({
        isbn: book.isbn,
        quantity: 1
      });
    }

    this.setCartToLocalStorage(this.cart);
    this.selectedBooksAmount = this.getSelectedBooksAmountFromCart(this.cart);
  }

  /**
   * Remove book from the cart list, or reduce its quantity
   */
  public removeBook(book: BookInterface): void {
    const bookIndex: number = this.cart.findIndex(((item, index) => item.isbn === book.isbn));

    if (bookIndex > -1 && this.cart[bookIndex].quantity >= 2) {
      this.cart[bookIndex].quantity -= 1;
    } else {
      this.cart.splice(bookIndex, 1);
    }

    this.setCartToLocalStorage(this.cart);
    this.selectedBooksAmount = this.getSelectedBooksAmountFromCart(this.cart);
  }
}
