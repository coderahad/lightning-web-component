import { LightningElement } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccounts';

export default class AccountManagerApex extends LightningElement {

  numberOfRecords;
  accounts;

  get responseReceived(){
    if(this.accounts) {
      return true;
    }
    return false;
  }

  numOfAccountChangeHandler(event) {
    this.numberOfRecords = event.target.value;
  }

  getAccounts(){
    getAllAccounts({numberOfRecords: this.numberOfRecords }).then(response => {
      this.accounts = response;
    }).catch(error => {
      console.error('Error in getting the accounts', error.body.message);
    });
  }
}
