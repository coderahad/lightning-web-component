import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
  meetingRoomsInfo = [
    {roomName: 'A-01', roomCapacity: '5'},
    {roomName: 'A-02', roomCapacity: '6'},
    {roomName: 'A-03', roomCapacity: '8'},
    {roomName: 'B-01', roomCapacity: '10'},
    {roomName: 'B-02', roomCapacity: '14'},
    {roomName: 'B-03', roomCapacity: '15'},
    {roomName: 'C-01', roomCapacity: '20'},
  ]
}