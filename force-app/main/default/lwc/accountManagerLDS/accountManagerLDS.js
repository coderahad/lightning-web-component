import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class AccountManagerLDS extends LightningElement {
    accountName;
    accountPhone;
    accountWebsite;

    accountNameChangeHandler(event) {
      this.accountName = event.target.value;
    }

    accountPhoneChangeHandler(event) {
      this.accountName = event.target.value;
    }

    accountWebsiteChangeHandler(event) {
      this.accountName = event.target.value;
    }

    createAccount() {
      const fields = {'Name': this.accountName, 'Phone': this.accountPhone, 'Website': this.accountWebsite };
      const recordInput = { apiName: 'Account', fields };

      createRecord(recordInput)
    }
}
