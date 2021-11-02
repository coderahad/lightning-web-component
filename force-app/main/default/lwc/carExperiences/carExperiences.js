import { LightningElement, api } from 'lwc';
import getExperiences from '@salesforce/apex/CarExperience.getExperiences';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class CarExperiences extends NavigationMixin(LightningElement) {

    privateCarId;
    carExperiences = [];

    connectedCallback(){
        this.getCarExperiences();
    }

    @api
    get carId(){
        return this.privateCarId;
    }

    set carId(value){
        this.privateCarId = value;
        this.getCarExperiences();
    }
    // We can not make a call to this getCarExperience from parent untill this method is public.
    @api
    getCarExperiences(){
        getExperiences({carId : this.privateCarId}).then( (experiences) =>{
            this.carExperiences = experiences;
        }).catch((error) =>{
            this.showToast('ERROR', error.body.message, 'error');
        })
    }

    userClickHandler(event){
        const userId = event.target.getAttribute('data-userid');
        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes: {
              recordId: userId,
              objectApiName: "User",
              actionName: "view",
            }
          });
    }
    
    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }

    get hasExperiences(){
        if(this.carExperiences.length > 0){
            return true;
        }
        return false;
    }
    
}