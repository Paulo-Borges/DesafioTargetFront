import { Injectable } from '@angular/core';
import { SellerCommission } from '../models/seller-commission.model';
import { Sale } from '../models/sale.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CommissionsService {

  private readonly apiUrl = 'https://localhost:7042/api/comissao';

  constructor(private http: HttpClient) {}

 getCommissions(): Observable<SellerCommission[]> {
  return this.http.get<SellerCommission[]>(
  this.apiUrl
);
}

}
