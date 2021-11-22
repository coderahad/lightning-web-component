import { LightningElement } from 'lwc';

export default class VaccineSlotFinder extends LightningElement {
    centers = [];
    dates = [];

    connectedCallback() {
        this.fetchVaccineSlots();
    }

    async fetchVaccineSlots() {
        // this is a http response
        const vaccineSlotsRes = await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=302004&date=21-11-2021" //,
           // We can provide request information here. As this is an open api we don't need to provide any header for this.
            // { 
            //     method: "POST",
            //     header: {

            //     }
            // }
        );
        // get the json out of the http response
        const slotsData = await vaccineSlotsRes .json();
        console.log(slotsData);
    }        

    get hideMessage(){
        return false;
    }
}

//https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=302004&date=21-11-2021