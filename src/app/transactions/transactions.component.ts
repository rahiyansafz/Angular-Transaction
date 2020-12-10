import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import {AccountService} from '../account.service';
import {Transaction} from '../models/transaction';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[] =[];

  constructor(private accountService: AccountService, private location: Location, private activatedRoute: ActivatedRoute) { }
 

  ngOnInit() {
    const accountId: number = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'))

    this.accountService
      .getTransactions(accountId)
      .subscribe(d=>this.transactions.push(d));
  }

}