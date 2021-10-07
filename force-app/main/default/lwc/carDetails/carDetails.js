import { LightningElement, wire } from 'lwc';
import { getRecord} from 'lightning/uiRecordApi';

export default class CarDetails extends LightningElement {
    
    carId;

    
    @wire(getRecord , {recordId: '$carId'})
    car;

    
    tabChangeHandler(event){
        
    }
}