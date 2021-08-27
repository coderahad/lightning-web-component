import { LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHN_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class AccountRecordForm extends LightningElement {
  recordId;

  fieldsArray = [NAME_FIELD, PHN_FIELD, WEBSITE_FIELD];

  handleSuccess(event) {
    this.recordId = event.detail.id;
  }
}
