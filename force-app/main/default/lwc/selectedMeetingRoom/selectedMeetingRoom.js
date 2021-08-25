import { LightningElement } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SelectedMeetingRoom extends LightningElement {
    selectedMeetingRoom;

    disconnectedCallback(){
      // unregisterAllListener() takes an object. 'this' is the current object.
      unregisterAllListeners(this);
    }

    
}
