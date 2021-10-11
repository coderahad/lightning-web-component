import { LightningElement } from 'lwc';

export default class AddCarExperience extends LightningElement {

    expTitle = '';
    expDescription = '';
    handleTitleChange(event){
        this.expTitle = event.target.value;
    }

    handleDescriptionChange(event){
        this.expDescription = event.target.value;
    }

    addExperience(){

    }
}