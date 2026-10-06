import {
Component,
inject
} from '@angular/core';
 
import {
FormBuilder,
ReactiveFormsModule,
Validators
} from '@angular/forms';
 
import { CurrencyPipe } from '@angular/common';
 
import { InterestService } from '../../service/interest.service';
import { InterestResponse } from '../../models/interest-response.model';
 
@Component({
selector: 'app-interest-page',
standalone: true,
imports: [
ReactiveFormsModule,
CurrencyPipe
],
templateUrl: './interest.page.html',
styleUrl: './interest.page.css',
})
export class InterestPage {
 
private fb = inject(FormBuilder);
private interestService = inject(InterestService);
 
result: InterestResponse | null = null;
 
form = this.fb.group({
valor: [0, Validators.required],
dataVencimento: ['', Validators.required]
});
 
calculate(): void {
 
if (this.form.invalid) {
return;
}
 
this.interestService
.calculate(this.form.getRawValue() as any)
.subscribe({
next: (response) => {
 
console.log(response);
 
this.result = response;
 
},
error: (error) => {
console.error(error);
}
});
 
}}