import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'
import {Account} from '../models/account'

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account: Account; // = {};

  constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    // use paramMap
    // this.activatedRoute.paramMap.subscribe(d=>{
    //   const id: number = Number.parseInt(d.get('id'));
    //       this.accountService.getAccount(id)
    //       .subscribe(d=>this.account = d);
    //   });


    const id: number = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.accountService.getAccount(id)
        .subscribe(d=>this.account = d);
  }

}