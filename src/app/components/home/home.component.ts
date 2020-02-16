/** angular */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/** end angular */

/** services */
import { BookService } from './services/book.service';
import { CartService } from './services/cart.service';
/** end services */

/** interfaces */
import { BookInterface } from './interfaces/book.interface';
import { CartItemInterface } from './interfaces/cart-item-interface';
/** end interfaces */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   * The list of books
   */
  public books: BookInterface[];
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

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private cartService: CartService) {
    this.books = [];
    this.cart = this.cartService.cart;
  }

  ngOnInit() {
    this.books = this.activatedRoute.snapshot.data.books;
  }

  /**
   * Add book to the cart list, or increase its quantity
   */
  public onAddToCart(book: BookInterface): void {
    this.cartService.addBook(book);
  }

  /**
   * Returns true if the book exists in cart
   */
  public isBookSelected(book: BookInterface): boolean {
    return this.cart.some(currentBook => currentBook.isbn === book.isbn);
  }
}
