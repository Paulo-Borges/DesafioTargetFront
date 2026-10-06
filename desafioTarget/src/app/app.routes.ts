import { Routes } from '@angular/router';

export const routes: Routes = [
    {
path: 'commissions',
loadComponent: () =>
import('./features/commissions/pages/commissions.page/commissions.page')
.then(m => m.CommissionsPage)
},
{
path: 'stock',
loadComponent: () =>
import('./features/stock/pages/stock.page/stock.page')
.then(m => m.StockPage)
},
{
path: 'interest',
loadComponent: () =>
import('./features/interest/pages/interest.page/interest.page')
.then(m => m.InterestPage)
},
{
path: '**',
redirectTo: 'commissions'
}
];
