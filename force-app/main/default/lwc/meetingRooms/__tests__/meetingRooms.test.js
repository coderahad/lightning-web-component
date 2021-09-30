import {createElement} from "lwc";
import MeetingRooms from "c/c/meetingRooms";

describe("c-meetingRooms", ()=>{
  
  it("count of meeting room should be 7", () => {
    const meetingRooms = createElement("c-meetingRooms", {is:MeetingRooms});
  })
});
