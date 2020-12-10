import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountService } from './account.service';
import { TransactionsComponent } from './transactions/transactions.component';
import {AppRouterModule} from './app-router/app-router.module';
import { AccountDetailsComponent } from './account-details/account-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {AuthModule} from './auth-module/auth.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouterModule, NgbModule],
  declarations: [ AppComponent, AccountsComponent, TransactionsComponent, AccountDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AccountService]
})
export class AppModule { }
