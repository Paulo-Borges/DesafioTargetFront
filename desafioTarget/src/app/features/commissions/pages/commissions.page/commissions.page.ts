import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { SellerCommission } from '../../models/seller-commission.model';
import { CommissionsService } from '../../services/commissions.service';

@Component({
  selector: 'app-commissions.page',
  imports: [CurrencyPipe],
  templateUrl: './commissions.page.html',
  styleUrl: './commissions.page.css',
})
export class CommissionsPage implements OnInit {
  commissions: SellerCommission[] = [];

  constructor(private commissionsService: CommissionsService) {}

ngOnInit(): void {
 
this.commissionsService
.getCommissions()
.subscribe({
next: (response) => {
  console.log('API:', response);
this.commissions = response;
},
error: (error) => {
console.error('API Error:', error);
}
});
 
}
  }


