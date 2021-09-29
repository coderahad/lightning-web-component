({
    doInit : function(component, event, helper) {
        component.set("v.meetingRoomInfo", [
            {roomName: 'A-01', roomCapacity: '5'},
            {roomName: 'A-02', roomCapacity: '6'},
            {roomName: 'A-03', roomCapacity: '8'},
            {roomName: 'B-01', roomCapacity: '10'},
            {roomName: 'B-02', roomCapacity: '14'},
            {roomName: 'B-03', roomCapacity: '15'},
            {roomName: 'C-01', roomCapacity: '20'},
          ]);
    },
    handleTileClick: function(component, event, helper) {
        // In aura event.getParam(parameter-name) in LWC event.details.property-name
        component.set("v.selectedMeetingRoom", event.getParam("roomName"));
    }
})
