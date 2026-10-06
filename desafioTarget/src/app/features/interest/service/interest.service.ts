import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Observable } from 'rxjs';
 
import { InterestRequest } from '../models/interest-request.model';
import { InterestResponse } from '../models/interest-response.model';
 
@Injectable({
providedIn: 'root'
})
export class InterestService {
 
private http = inject(HttpClient);
 
private readonly apiUrl =
'https://localhost:7042/api/Juros';
 
calculate(
request: InterestRequest
): Observable<InterestResponse> {
 
return this.http.post<InterestResponse>(
this.apiUrl,
request
);
}
 
}