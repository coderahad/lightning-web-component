import { LightningElement } from 'lwc';

export default class VaccineSlotFinder extends LightningElement {
    centers = [];
    dates = [];
    get hideMessage(){
        return false;
    }
}