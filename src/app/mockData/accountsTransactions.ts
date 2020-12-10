import {Account} from '../models/account'

export const fakeData: Account[] =
  [
    {
      "id": 1,
      "name": "checking",
      "balance": 100,
      "transactions": [{
        "accountId": 1,
        "amount": 1,
        "date": new Date()
      },
      {
        "accountId": 1,
        "amount": 2,
        "date": new Date()
      }
      ]
    }, {
      "id": 2,
      "name": "saving",
      "balance": 200,
      "transactions": [{
        "accountId": 2,
        "amount": 11,
        "date": new Date()
      },
      {
        "accountId": 2,
        "amount": 22,
        "date": new Date()
      }
      ]
    }
  ]