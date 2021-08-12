import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
  @api meetingRoomInfo = {roomName: 'A-01', roomCapacity: '12'};

  @api showRoomInfo = false;

  tileClickedHandler() {
    // crate event with CustomEvent Constructor and input payload.
    // When using this event we need to prepend on: ontileclick.
    const tileClicked = new CustomEvent('tileclick', {detail: this.meetingRoomInfo, bubbles: true });

    //fire the event
    this.dispatchEvent(tileClicked);
  }
}

