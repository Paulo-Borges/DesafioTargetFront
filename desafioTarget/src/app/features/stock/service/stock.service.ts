import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class StockService {

    private http = inject(HttpClient);

    private apiUrl = 'https://localhost:7042/api/estoque/movimentar';

    

    movimentar(request: any): Observable<any> {
 
      return this.http.post<any>(
      `${this.apiUrl}`,
      request
    );
  
 }
}