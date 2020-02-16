/** angular */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
/** end angular */

/** interfaces */
import { BookInterface } from './interfaces/book.interface';
import { Observable } from 'rxjs';
import { BookService } from './services/book.service';
/** end interfaces */

@Injectable()
export class HomeResolver implements Resolve<BookInterface[]> {
    constructor(private http: HttpClient, private bookService: BookService) {}
    resolve(): Observable<BookInterface[]> {
        return this.bookService.getBook();
    }
}
