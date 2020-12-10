import { Component, OnInit } from '@angular/core';
import {Account} from '../models/account';
import {AccountService} from '../account.service';
import {tap} from 'rxjs/operators'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService
      .getAccounts()
      .pipe(
        tap(d=> console.log('component', d) )
      )
      .subscribe(d=>{this.accounts.push(d)});
  }

}