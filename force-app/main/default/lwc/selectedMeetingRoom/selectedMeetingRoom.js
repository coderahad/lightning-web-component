import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SelectedMeetingRoom extends LightningElement {
    // error happens when I didn't assign this blank object. because it was null
    // and component could not read the roomName intially.
    selectedMeetingRoom = {};
    // 'pageRef' and 'pageReference' from meetingRoom are examined by pubsub if they are in same page.
    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
      registerListener('pubsubtileclick', this.onMeetingRoomSelectHandler, this);
    }

    disconnectedCallback(){
      // unregisterAllListener() takes an object. 'this' is the current object.
      unregisterAllListeners(this);
    }
    //this is the callback of registerListener. payload we get from the fired event
    onMeetingRoomSelectHandler(payload) {
      this.selectedMeetingRoom = payload;
    }
}
