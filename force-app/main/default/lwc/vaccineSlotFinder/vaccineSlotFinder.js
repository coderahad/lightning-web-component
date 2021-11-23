import { LightningElement } from 'lwc';

export default class VaccineSlotFinder extends LightningElement {
    centers = [];
    dates = [];

    connectedCallback() {
        this.fetchVaccineSlots();
    }

    async fetchVaccineSlots() {
        // this is a http response
        const vaccineSlotsRes = await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=302004&date=21-11-2021");
        // get the json out of the http response
        const slotsData = await vaccineSlotsRes .json();
        this.buildColumnsAndRows(slotsData.centers);
    }        

    buildColumnsAndRows(data) {
        // build columns/dates
        const dates = new Map();
        // as a key to this map we add name. 'name' also the very first column's fieldName.
        dates.set("name", {label: "Center Name", fieldName: "name", type: "text"});

        // build rows/centers
        const centers = new Map();

        for(const center of data) {
            centers.set(center.center_id, {name: center.name})

            for(const session of center.sessions) {
                // destructuring syntax
                const { date, available_capacity, min_age_limit } = session;

                // add date as column in dates map
                dates.set(date, {label: date, fieldName: date, type: "text"});
            }
        }

        console.log(dates);
        console.log(centers);
    }

    get hideMessage(){
        return false;
    }
}
