/** angular */
import { Component } from '@angular/core';
/** end angular */

/** services */
import { CartService } from './components/home/services/cart.service';
/** end services */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * The amount of selected books
   */
  private _selectedBooksAmount: number;
  public get selectedBooksAmount(): number {
    return this._selectedBooksAmount;
  }
  public set selectedBooksAmount(amount: number) {
    this._selectedBooksAmount = amount;
  }

  constructor(private cartService: CartService) {
    this.cartService.selectedBooksAmountObservable.subscribe(value => this.selectedBooksAmount = value);
  }
}
