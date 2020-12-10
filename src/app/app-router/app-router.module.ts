import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AccountDetailsComponent } from '../account-details/account-details.component'
import { TransactionsComponent } from '../transactions/transactions.component';
import {AccountsComponent} from '../accounts/accounts.component'
import {} from '../auth-module/auth.module'

const routes: Routes = [
  {
    path: 'account/:id',
    component: AccountDetailsComponent,
    
  },
  {
    path: 'account/:id/transactions',
    component: TransactionsComponent,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        // component: LoginComponent
        redirectTo: ''
      }
    ]
  },
  {
    path:"",
    component: AccountsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{enableTracing:true})
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }