import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    try {
      this.httpClient
        .get('https://fakestoreapi.com/products')
        .pipe(
          tap((value: any) => {
            console.table(value);
          })
        )
        .subscribe();
    } catch (e) {
      console.log(e);
    }
  }
}
