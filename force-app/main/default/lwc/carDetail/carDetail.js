import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CarDetail extends NavigationMixin(LightningElement) {
  
    @api car;

    fullDetails(){
        this[NavigationMixin.Navigate]({
          type: "standard__recordPage",
          attributes: {
            recordId: this.car.data.fields.Id.value,
            objectApiName: "Car__c",
            actionName: "view"
          }
        });
    }
}