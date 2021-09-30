import {createElement} from "lwc";
import MeetingRooms from "c/meetingRooms";

describe("c-meetingRooms", ()=>{
  afterEach(()=>{
    while(document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("count of meeting room should be 7", () => {
    const meetingRooms = createElement("c-meetingRooms", {is:MeetingRooms});

    document.body.appendChild(meetingRooms);
    // We are quering all c-meeting-room cmp inside our meetingRooms cmp.
    // Because this is shadow DOM. shadowRoot is used.
    const allMeetingRoomComponents = meetingRooms.shadowRoot.querySelectorAll("c-meeting-room");

    debugger;
    // This is system.assert() in js test file.
    expect(allMeetingRoomComponents.length).toBe(7);
  });

  it("title should be Meeting Rooms", ()=>{
    const meetingRooms = createElement("c-meetingRooms", {is:MeetingRooms});
    document.body.appendChild(meetingRooms);

    const lightningCard = meetingRooms.shadowRoot.querySelector("lightning-card");

    debugger;
    expect(lightningCard.title).toBe("Meeing Rooms")
  })  
});
