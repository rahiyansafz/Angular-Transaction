import { Injectable } from '@angular/core';
import { Account, Transaction } from './models/account';
import { Observable, of, from } from 'rxjs';
import { tap, filter, take, map, mergeMap } from 'rxjs/operators'
import { fakeData } from './mockData/accountsTransactions';

@Injectable({
  providedIn: "root"
})
export class AccountService {

  constructor() { }

  getAccounts(): Observable<Account> {
    return from(fakeData);
  }

  getAccount(id: number): Observable<Account> {
    return from(fakeData)
      .pipe(
        filter(d => d.id == id),
        tap(d => { console.log(`getAccount returned ${d}`) }),
        take(1)
      );
  }

  getTransactions(accountId: number): Observable<Transaction>{
    return from(fakeData)
      .pipe(
        filter(d=> d.id == accountId),
        map(d=> d.transactions),
        mergeMap(d=>d)
      );

  }

}