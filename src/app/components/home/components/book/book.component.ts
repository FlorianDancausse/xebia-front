/** angular */
import { Component, Input, Output, EventEmitter } from '@angular/core';
/** end angular */

/** interfaces */
import { BookInterface } from '../../interfaces/book.interface';
/** end interfaces */

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  /**
   * The current book
   */
  private _book: BookInterface;
  public get book(): BookInterface {
    return this._book;
  }
  @Input() public set book(book: BookInterface) {
    this._book = book;
  }
  /**
   * Is book selected
   */
  private _isSelected: boolean;
  public get isSelected(): boolean {
    return this._isSelected;
  }
  @Input() public set isSelected(isSelected: boolean) {
    this._isSelected = isSelected;
  }
  /**
   * Emitter of the selected book
   */
  @Output() private addToCart: EventEmitter<BookInterface> = new EventEmitter();

  /**
   * Emits the selected book
   */
  public onAddToCart(): void {
    this.addToCart.emit(this.book);
  }
}
