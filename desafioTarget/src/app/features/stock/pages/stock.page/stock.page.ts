import { Component, inject } from '@angular/core';
import {
FormBuilder,
ReactiveFormsModule,
Validators
} from '@angular/forms';
 
import { PRODUCTS } from '../../../../data/products';
 
import { StockService } from '../../service/stock.service';
 
@Component({
selector: 'app-stock-page',
standalone: true,
imports: [ReactiveFormsModule],
templateUrl: './stock.page.html',
styleUrl: './stock.page.css',
})
export class StockPage {
 
private fb = inject(FormBuilder);
private stockService = inject(StockService);
 
products = PRODUCTS;
 
response: any = null;
 
form = this.fb.group({
codigoProduto: [101, Validators.required],
tipo: ['Entrada', Validators.required],
quantidade: [1, Validators.required],
descricao: ['', Validators.required]
});
 
save(): void {
 
if (this.form.invalid) {
return;
}
 
this.stockService
.movimentar(this.form.getRawValue())
.subscribe({
next: (response) => {
 
console.log(response);
 
this.response = response;
 
},
error: (error) => {
console.error(error);
}
});
 
}
 
}