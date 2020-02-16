/** angular */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/** end angular */

/** interfaces */
import { BookInterface } from '../interfaces/book.interface';
/** end interfaces */

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  public getBook(): Observable<BookInterface[]> {
    return this.http.get<BookInterface[]>('http://henri-potier.xebia.fr/books');
  }

  public getCommercialOffers(isbn: string) {
    return this.http.get(`http://henri-potier.xebia.fr/books/${isbn}/commercialOffers  `);
  }
}
